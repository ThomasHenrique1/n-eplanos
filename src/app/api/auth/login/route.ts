/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { email, senha } = await req.json();

    const { data: corretor, error } = await supabase
      .from('corretores')
      .select('*')
      .eq('email', email)
      .eq('senha', senha)
      .single();

    if (error || !corretor) {
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    }

    // Salvar corretorId no localStorage (isso será feito no frontend)
    return NextResponse.json({ message: 'Login bem-sucedido', corretorId: corretor.id });
  } catch (error) {
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}
