/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers'; // Importação nova

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { email, senha } = await req.json();

    // 1. Busca o corretor no Supabase
    const { data: corretor, error } = await supabase
      .from('corretores')
      .select('*')
      .eq('email', email)
      .eq('senha', senha)
      .single();

    if (error || !corretor) {
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    }

    // 2. Armazena o ID em um cookie httpOnly (seguro)
    const cookieStore = await cookies();
    cookieStore.set('corretorId', corretor.id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // HTTPS em produção
      sameSite: 'strict', // Proteção contra CSRF
      maxAge: 60 * 60 * 24 * 7, // 1 semana de expiração
      path: '/', // Disponível em todas as rotas
    });

    // 3. Retorna resposta sem dados sensíveis
    return NextResponse.json({ 
      message: 'Login bem-sucedido',
      corretor: {
        id: corretor.id,
        nome: corretor.nome,
        email: corretor.email
        // Outros campos não sensíveis
      }
    });

  } catch (error) {
    return NextResponse.json({ 
      error: 'Erro interno no servidor' 
    }, { 
      status: 500 
    });
  }
}