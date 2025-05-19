import Link from 'next/link';
import Image from 'next/image';
import { FaLock, FaUserShield, FaChartLine, FaHeadset } from 'react-icons/fa';

export default function CorretorHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#084040] via-[#0a4d4d] to-[#0D0D0D] flex flex-col items-center justify-center px-4 py-8 sm:py-12 text-white">
      {/* Header com Logo */}
      <div className="mb-8 sm:mb-12 text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//logo.jpg"
            alt="Logo N&H Associados"
            width={240}
            height={120}
            className="object-contain rounded-lg hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#A1C7D6] to-white">
          Portal do Corretor
        </h1>
        <p className="text-[#A1C7D6] text-sm sm:text-base">
          <FaLock className="inline mr-2" />
          Acesso exclusivo para corretores credenciados
        </p>
      </div>

      {/* Card Principal */}
      <div className="bg-white/5 backdrop-blur-md border border-[#A1C7D6]/30 rounded-xl p-8 w-full max-w-md mx-auto text-center shadow-xl hover:shadow-2xl transition-shadow">
        <div className="flex justify-center mb-4">
          <FaUserShield className="text-3xl text-[#A1C7D6]" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Acesse sua conta</h2>
        <p className="text-[#D9D9D9] text-base mb-6">
          Utilize suas credenciais para gerenciar leads, acompanhar vendas e acessar relatórios exclusivos.
        </p>

        <div className="space-y-4">
          <Link
            href="corretores/login"
            className="w-full bg-gradient-to-r from-[#084040] to-[#0a4d4d] hover:from-[#0a4d4d] hover:to-[#084040] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            <FaLock className="mr-2" /> Acessar Painel
          </Link>

          <Link
            href="/recuperar-acesso"
            className="text-[#A1C7D6] hover:text-white text-sm underline transition-colors"
          >
            Esqueci minha senha
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-[#A1C7D6]/20">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="/vantagens" className="group">
              <FaChartLine className="text-xl text-[#A1C7D6] group-hover:text-white transition-colors" />
              <span className="sr-only">Vantagens</span>
            </Link>
            <Link href="/suporte" className="group">
              <FaHeadset className="text-xl text-[#A1C7D6] group-hover:text-white transition-colors" />
              <span className="sr-only">Suporte</span>
            </Link>
          </div>
          <p className="text-xs text-[#A1C7D6]">
            Precisa de ajuda? <Link href="/suporte" className="text-white hover:underline">Fale com nosso time</Link>
          </p>
        </div>
      </div>

      {/* Destaques */}
      <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
        <div className="bg-white/5 p-4 rounded-lg text-center">
          <div className="text-[#A1C7D6] text-sm font-medium">+200</div>
          <div className="text-xs">Corretores Ativos</div>
        </div>
        <div className="bg-white/5 p-4 rounded-lg text-center">
          <div className="text-[#A1C7D6] text-sm font-medium">24/7</div>
          <div className="text-xs">Suporte</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-[#A1A6A2] text-xs">
          © {new Date().getFullYear()} N&H Associados. Todos os direitos reservados.
          <span className="block mt-1 text-[0.6rem] opacity-70">Versão 1.0.2 | Ambiente Seguro</span>
        </p>
      </footer>
    </div>
  );
}