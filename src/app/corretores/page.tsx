import Link from 'next/link';
import Image from 'next/image';

export default function CorretorHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#084040] to-[#0D0D0D] flex flex-col items-center justify-center px-4 py-8 sm:py-12 text-white">
      {/* Header com Logo - Ajustado para mobile */}
      <div className="mb-6 sm:mb-8 text-center">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Image
            src="https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//logo.jpg"
            alt="Logo da Corretora"
            width={200}  // Reduzido para mobile
            height={120} // Reduzido para mobile
            className="object-contain rounded-lg w-auto h-auto max-w-[280px] max-h-[180px]" // Limites máximos
            priority // Melhora LCP
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Portal do Corretor</h1>
        <p className="text-[#A1A6A2] text-sm sm:text-base">Acesso exclusivo para corretores credenciados</p>
      </div>

      {/* Card de Acesso */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 w-full max-w-xs sm:max-w-md mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Acesse sua conta</h2>
        <p className="text-[#D9D9D9] text-sm sm:text-base mb-4 sm:mb-6">
          Utilize suas credenciais para acessar o painel de gerenciamento de leads.
        </p>

        <Link
          href="corretores/login"
          className="inline-block w-full bg-[#084040] hover:bg-[#0D0D0D] text-white font-medium py-3 px-4 sm:px-6 rounded-lg transition duration-200 text-sm sm:text-base"
          aria-label="Ir para página de login"
        >
          Ir para Login
        </Link>

        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
          <p className="text-xs sm:text-sm text-[#A1A6A2]">
            Problemas com acesso?{' '}
            <Link href="/suporte" className="text-white hover:underline text-xs sm:text-sm">
              Contate o suporte
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 sm:mt-12 text-center">
        <p className="text-[#A1A6A2] text-xs sm:text-sm">
          © {new Date().getFullYear()} N&H Associados. Todos os direitos reservados.
        </p>
        <p className="mt-1 text-[0.7rem] sm:text-xs">Versão 1.0.0</p>
      </footer>
    </div>
  );
}