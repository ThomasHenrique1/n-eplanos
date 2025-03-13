/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Função de Inserção de Lead (POST)
export async function POST(req: Request) {
  try {
    const { nome, idade, telefone, email, preferencia_contato, cnpj, plano_saude, formacao_academica } =
      await req.json();

    // Pegando o ID do corretor logado
    const { data: userResponse } = await supabase.auth.getUser();
    const corretor_id = userResponse?.user?.id;

    if (!corretor_id) {
      return NextResponse.json({ error: "Corretor não autenticado" }, { status: 401 });
    }

    // Contar o número de leads de cada corretor
    const { data: corretoresData, error: corretoresError } = await supabase
      .from("corretores") // Supondo que você tenha uma tabela de corretores
      .select("id, lead_count")
      .order("lead_count", { ascending: true });

    if (corretoresError) {
      return NextResponse.json({ error: corretoresError.message }, { status: 400 });
    }

    // Atribui o lead ao corretor com menos leads
    const corretorComMenosLeads = corretoresData[0].id;

    // Insere os dados do lead na tabela lead_duplicate com o corretor_id associado
    const { data, error } = await supabase.from("lead_duplicate").insert([
      {
        nome,
        idade,
        telefone,
        email,
        preferencia_contato,
        cnpj,
        plano_saude,
        formacao_academica,
        corretor_id: corretorComMenosLeads, // Atribuindo o lead ao corretor com menos leads
      },
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Lead cadastrado com sucesso!", data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao cadastrar lead" }, { status: 500 });
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

    // Consultando os leads do corretor logado na tabela lead_duplicate
    const { data, error } = await supabase.from("lead_duplicate").select("*").eq("corretor_id", corretor_id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar leads" }, { status: 500 });
  }
}

export async function PATCH() {
  try {
    const prazoExpiracao = new Date();
    prazoExpiracao.setHours(prazoExpiracao.getHours() - 48); // Subtrai 48 horas

    // Busca leads não contatados e com mais de 48h
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

    // Buscar o corretor com menos leads
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

    // Redistribuir leads expirados
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