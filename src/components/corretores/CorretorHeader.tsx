/* eslint-disable @typescript-eslint/no-unused-vars */
// components/corretores/CorretorHeader.tsx
import { useRouter } from 'next/navigation';
import { FiUser, FiArrowRight } from 'react-icons/fi';


interface CorretorHeaderProps {
  nome: string | null;
  mostrarBotaoDashboard?: boolean;
  dashboardPath?: string; // Novo prop
}

export default function CorretorHeader({ nome, mostrarBotaoDashboard = false, dashboardPath }: CorretorHeaderProps) {
  const router = useRouter();

  const handleDashboardClick = () => {
    router.push('corretores/painel/dashboard'); // Rota corrigida
  };
  return (
    <header className="bg-gradient-to-br from-[#084040] to-[#0D0D0D] text-white rounded-xl shadow-lg mb-2 overflow-hidden">
      <div className="relative">
        {/* Faixa decorativa */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0d0d0de1] via-[#084040] to-[#0D0D0D]"></div>
        
        <div className="p-4 text-center">
          {/* Logo/Título */}
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20">
                <FiUser className="text-white" size={28} />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D9D9D9]">
              Painel do Corretor
            </h1>
            <p className="text-[#A1A6A2] text-sm mt-4">
              {new Date().toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          </div>
          
          {/* Nome do Corretor e Botão (container flex) */}
          <div className={`mt-6 ${mostrarBotaoDashboard ? 'flex flex-col md:flex-row justify-center items-center gap-4' : ''}`}>
            {nome && (
              <div>
                <div className="text-xl text-[#ffffff] mb-1">Bem-vindo</div>
                <div className="text-2xl md:text-3xl font-medium bg-white/5 px-6 py-3 rounded-lg inline-block border border-white/10 backdrop-blur-sm">
                  {nome}
                </div>
              </div>
            )}
            
            {mostrarBotaoDashboard && (
          <button
            onClick={() => router.push(dashboardPath || '/dashboard')}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-lg font-medium transition-all backdrop-blur-sm mt-4 md:mt-0"
          >
            Acessar Dashboard <FiArrowRight className="ml-1" />
          </button>
        )}
          </div>
        </div>
      </div>
    </header>
  );
}