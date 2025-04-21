import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/**
 * POST - Cria um novo lead e distribui para o corretor com menos leads
 */
export async function POST(req: Request) {
  try {
    const { nome, idade, telefone, email, preferencia_contato, cnpj, plano_saude, formacao_academica } = await req.json();

    // 1. Busca corretor com menos leads (apenas IDs 2 e 3)
    const { data: corretores, error: corretorError } = await supabase
      .from("corretores")
      .select("id, lead_count")
      .in("id", [2, 3])
      .order("lead_count", { ascending: true });

    if (corretorError || !corretores || corretores.length === 0) {
      console.error("Erro ao buscar corretores:", corretorError);
      return NextResponse.json(
        { error: "Erro ao buscar corretores disponíveis" },
        { status: 400 }
      );
    }

    const corretorId = corretores[0].id;

    // 2. Prepara dados do lead
    const leadData = {
      nome,
      idade,
      telefone,
      email,
      preferencia_contato,
      cnpj: cnpj === "Sim",
      plano_saude: plano_saude === "Sim",
      formacao_academica: formacao_academica === "Sim",
      corretor_id: corretorId,
      contatado: false,
      created_at: new Date().toISOString()
    };

    // 3. Insere o novo lead
    const { data: newLead, error: leadError } = await supabase
      .from("lead_duplicate")
      .insert(leadData)
      .select()
      .single();

    if (leadError) {
      console.error("Erro ao inserir lead:", leadError);
      return NextResponse.json(
        { error: "Erro ao cadastrar lead" },
        { status: 400 }
      );
    }

    // 4. Atualiza contador do corretor
    const { error: updateError } = await supabase
      .from("corretores")
      .update({ lead_count: corretores[0].lead_count + 1 })
      .eq("id", corretorId);

    if (updateError) {
      console.error("Erro ao atualizar contador:", updateError);
      // Não retorna erro aqui para não prejudicar a experiência do usuário
    }

    return NextResponse.json(
      { message: "Lead cadastrado com sucesso!", data: newLead },
      { status: 201 }
    );

  } catch (error) {
    console.error("Erro interno no servidor:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro interno no servidor" },
      { status: 500 }
    );
  }
}

/**
 * GET - Busca leads do corretor autenticado
 */
export async function GET() {
  try {
    // 1. Verifica autenticação
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "Autenticação necessária" },
        { status: 401 }
      );
    }

    // 2. Busca leads do corretor
    const { data: leads, error: leadsError } = await supabase
      .from("lead_duplicate")
      .select("*")
      .eq("corretor_id", user.id)
      .order("created_at", { ascending: false });

    if (leadsError) {
      console.error("Erro ao buscar leads:", leadsError);
      return NextResponse.json(
        { error: "Erro ao buscar leads" },
        { status: 400 }
      );
    }

    return NextResponse.json(leads || []);

  } catch (error) {
    console.error("Erro interno no servidor:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro interno no servidor" },
      { status: 500 }
    );
  }
}

/**
 * PATCH - Redistribui leads não contatados há mais de 5 dias
 */
export async function PATCH() {
  try {
    // 1. Calcula data limite (5 dias atrás)
    const cincoDiasAtras = new Date();
    cincoDiasAtras.setDate(cincoDiasAtras.getDate() - 5);

    // 2. Busca leads expirados
    const { data: leadsExpirados, error: leadsError } = await supabase
      .from("lead_duplicate")
      .select("id, corretor_id")
      .eq("contatado", false)
      .lt("created_at", cincoDiasAtras.toISOString());

    if (leadsError) {
      console.error("Erro ao buscar leads expirados:", leadsError);
      return NextResponse.json(
        { error: "Erro ao buscar leads para redistribuição" },
        { status: 400 }
      );
    }

    if (!leadsExpirados || leadsExpirados.length === 0) {
      return NextResponse.json(
        { message: "Nenhum lead para redistribuir" },
        { status: 200 }
      );
    }

    // 3. Processa cada lead expirado
    for (const lead of leadsExpirados) {
      await redistribuirLead(lead.id, lead.corretor_id);
    }

    return NextResponse.json(
      { 
        message: "Redistribuição concluída",
        leads_redistribuidos: leadsExpirados.length 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erro interno no servidor:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro interno no servidor" },
      { status: 500 }
    );
  }
}

/**
 * Função auxiliar para redistribuir um lead específico
 */
async function redistribuirLead(leadId: string, corretorAtualId: string) {
  try {
    // 1. Busca novo corretor (excluindo o atual)
    const { data: novoCorretor, error: corretorError } = await supabase
      .from("corretores")
      .select("id, lead_count")
      .not("id", "eq", corretorAtualId)
      .order("lead_count", { ascending: true })
      .limit(1)
      .single();

    if (corretorError || !novoCorretor) {
      console.error("Erro ao buscar novo corretor:", corretorError);
      return;
    }

    // 2. Atualiza lead com novo corretor
    const { error: updateLeadError } = await supabase
      .from("lead_duplicate")
      .update({ 
        corretor_id: novoCorretor.id,
        created_at: new Date().toISOString() // Reseta o timer
      })
      .eq("id", leadId);

    if (updateLeadError) {
      console.error("Erro ao atualizar lead:", updateLeadError);
      return;
    }

    // 3. Atualiza contador do novo corretor (+1)
    await supabase
      .from("corretores")
      .update({ lead_count: novoCorretor.lead_count + 1 })
      .eq("id", novoCorretor.id);

    // 4. Atualiza contador do corretor anterior (-1)
    await supabase
      .from("corretores")
      .update({ lead_count: () => "lead_count - 1" })
      .eq("id", corretorAtualId);

  } catch (error) {
    console.error("Erro na redistribuição do lead:", error);
  }
}