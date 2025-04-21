import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  try {
    // 1. Verifica se é uma chamada autorizada
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    // 2. Chama a função SQL de redistribuição
    const { error } = await supabase.rpc('redistribuir_leads_antigos');

    if (error) {
      console.error('Erro na redistribuição:', error);
      return NextResponse.json(
        { error: 'Falha na redistribuição', details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Leads redistribuídos com sucesso'
    });

  } catch (error) {
    console.error('Erro interno:', error);
    return NextResponse.json(
      { error: 'Erro interno no servidor' },
      { status: 500 }
    );
  }
}