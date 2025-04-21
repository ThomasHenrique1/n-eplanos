import Link from 'next/link';
import Image from 'next/image';

export default function CorretorHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#084040] to-[#0D0D0D] flex flex-col items-center justify-center p-4 text-white">
      {/* Header com Logo */}
      <div className="mb-8 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//logo.jpg" // Substitua pelo caminho da sua logo
            alt="Logo da Corretora"
            width={280}
            height={180}
            className="object-contain rounded-lg"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Portal do Corretor</h1>
        <p className="text-[#A1A6A2]">Acesso exclusivo para corretores credenciados</p>
      </div>

      {/* Card de Acesso */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Acesse sua conta</h2>
        <p className="text-[#D9D9D9] mb-6">
          Utilize suas credenciais para acessar o painel de gerenciamento de leads.
        </p>

        <Link
          href="corretores/login" // Ou a rota correta do seu login
          className="inline-block bg-[#084040] hover:bg-[#0D0D0D] text-white font-medium py-3 px-6 rounded-lg transition duration-200"
        >
          Ir para Login
        </Link>

        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="text-sm text-[#A1A6A2]">
            Problemas com acesso?{' '}
            <Link href="/suporte" className="text-white hover:underline">
              Contate o suporte
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-[#A1A6A2]">
        <p>© {new Date().getFullYear()} N&H Associados. Todos os direitos reservados.</p>
        <p className="mt-1 text-xs">Versão 1.0.0</p>
      </footer>
    </div>
  );
}