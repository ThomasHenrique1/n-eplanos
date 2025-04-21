import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const corretorId = (await cookies()).get('corretorId')?.value;

  if (!corretorId) {
    return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
  }

  const { data: corretor } = await supabase
    .from('corretores')
    .select('id, nome, email')
    .eq('id', corretorId)
    .single();

  if (!corretor) {
    return NextResponse.json({ error: 'Corretor não encontrado' }, { status: 404 });
  }

  return NextResponse.json({ corretor });
}