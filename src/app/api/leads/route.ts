/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Função de Inserção de Lead (POST)
export async function POST(req: Request) {
  try {
    const { nome, idade, telefone, email, preferencia_contato, cnpj, plano_saude, formacao_academica } =
      await req.json();

    // Verifica quantos leads cada corretor tem
    const { data: corretoresData, error: corretoresError } = await supabase
      .from("corretores")
      .select("id, lead_count")
      .in("id", [2, 3]) // Somente os corretores com id 2 e 3
      .order("lead_count", { ascending: true }); // Ordena para pegar o corretor com menos leads

    if (corretoresError) {
      return NextResponse.json({ error: corretoresError.message }, { status: 400 });
    }

    if (!corretoresData || corretoresData.length !== 2) {
      return NextResponse.json({ error: "Corretor não encontrado" }, { status: 400 });
    }

    // Verificar a alternância correta: o lead vai para o corretor com menos leads
    const corretorComMenosLeads = corretoresData[0].id;
    const corretorComMaisLeads = corretoresData[1].id;

    // Converte os campos booleanos para true/false
    const booleanValues = {
      cnpj: cnpj === "Sim",
      plano_saude: plano_saude === "Sim",
      formacao_academica: formacao_academica === "Sim",
    };

    // Insere o lead na tabela lead_duplicate com o corretor_id alternado
    const { data, error } = await supabase
      .from("lead_duplicate")
      .insert([{
        nome,
        idade,
        telefone,
        email,
        preferencia_contato,
        cnpj: booleanValues.cnpj,
        plano_saude: booleanValues.plano_saude,
        formacao_academica: booleanValues.formacao_academica,
        corretor_id: corretorComMenosLeads, // Atribui ao corretor com menos leads
      }])
      .select(); // Retorna os dados inseridos

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Após a inserção, atualiza o contador de leads do corretor que recebeu o lead
    await supabase
      .from("corretores")
      .update({ lead_count: corretoresData[0].lead_count + 1 })
      .eq("id", corretorComMenosLeads);

    // Alterna para o outro corretor na próxima inserção, garantindo alternância justa
    await supabase
      .from("corretores")
      .update({ lead_count: corretoresData[1].lead_count + 1 })
      .eq("id", corretorComMaisLeads);

    return NextResponse.json({ message: "Cadastro realizado com sucesso!", data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao cadastrar" }, { status: 500 });
  }
}

// Função de Consulta de Leads (GET)
export async function GET() {
  try {
    const { data: userResponse } = await supabase.auth.getUser();
    const corretor_id = userResponse?.user?.id;

    if (!corretor_id) {
      return NextResponse.json({ error: "Corretor não autenticado" }, { status: 401 });
    }

    // Consultando os leads do corretor logado
    const { data, error } = await supabase.from("lead_duplicate").select("*").eq("corretor_id", corretor_id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar leads" }, { status: 500 });
  }
}

// Função de Redistribuição de Leads Expirados (PATCH)
export async function PATCH() {
  try {
    const prazoExpiracao = new Date();
    prazoExpiracao.setHours(prazoExpiracao.getHours() - 48);

    // Busca leads expirados
    const { data: leadsExpirados, error: errorLeads } = await supabase
      .from("lead_duplicate")
      .select("id, corretor_id")
      .eq("contatado", false)
      .lt("created_at", prazoExpiracao.toISOString());

    if (errorLeads) {
      return NextResponse.json({ error: errorLeads.message }, { status: 400 });
    }

    if (!leadsExpirados || leadsExpirados.length === 0) {
      return NextResponse.json({ message: "Nenhum lead expirado encontrado" }, { status: 200 });
    }

    // Busca o corretor com menos leads
    const { data: corretores, error: errorCorretores } = await supabase
      .from("corretores")
      .select("id, lead_count")
      .order("lead_count", { ascending: true });

    if (errorCorretores) {
      return NextResponse.json({ error: errorCorretores.message }, { status: 400 });
    }

    if (!corretores || corretores.length === 0) {
      return NextResponse.json({ error: "Nenhum corretor encontrado" }, { status: 400 });
    }

    // Redistribui os leads expirados
    for (const lead of leadsExpirados) {
      const novoCorretor = corretores.find(c => c.id !== lead.corretor_id);
      if (!novoCorretor) continue;

      await supabase
        .from("lead_duplicate")
        .update({ corretor_id: novoCorretor.id, created_at: new Date().toISOString() })
        .eq("id", lead.id);
    }

    return NextResponse.json({ message: "Leads redistribuídos com sucesso" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao redistribuir leads" }, { status: 500 });
  }
}
