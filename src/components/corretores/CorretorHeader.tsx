// components/corretores/CorretorHeader.tsx
import { useRouter } from 'next/navigation';
import { FiUser, FiArrowRight } from 'react-icons/fi';

interface CorretorHeaderProps {
  nome: string | null;
  mostrarBotaoDashboard?: boolean;
  dashboardPath?: string;
}

export default function CorretorHeader({ nome, mostrarBotaoDashboard = false, dashboardPath }: CorretorHeaderProps) {
  const router = useRouter();

  return (
    <header className="bg-gradient-to-br from-[#084040] to-[#0a2e2e] text-white rounded-xl shadow-lg mb-6 overflow-hidden border border-white/10 hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        {/* Faixa decorativa */}
         <div className="h-1.5 bg-gradient-to-r from-[#0a2e2e] via-[#084040] to-[#0a2e2e] opacity-90"></div>
        
        <div className="p-4 sm:p-6">
        {/* Cabeçalho com logo e título */}
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-md"></div>
            <div className="relative bg-gradient-to-br from-white/15 to-white/5 p-3 rounded-full border border-white/20 backdrop-blur-sm">
              <FiUser className="text-white" size={28} />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#c5d5d5]">
              Painel do Corretor
            </span>
          </h1>
            <p className="text-white/80 text-sm sm:text-base mt-3 font-light">
            {new Date().toLocaleDateString('pt-BR', { 
              weekday: 'long', 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}
          </p>
          </div>
          
          {/* Nome do Corretor e Botão */}
          <div className={`mt-4 sm:mt-6 ${mostrarBotaoDashboard ? 'flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4' : ''}`}>
            {nome && (
              <div className="mb-3 sm:mb-0">
                <div className="text-lg sm:text-xl text-[#ffffff] mb-1">Bem-vindo</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-medium bg-white/5 px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-block border border-white/10 backdrop-blur-sm">
                  {nome}
                </div>
              </div>
            )}
            
            {mostrarBotaoDashboard && (
              <button
                onClick={() => router.push(dashboardPath || '/dashboard')}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-md backdrop-blur-sm text-base whitespace-nowrap min-w-[200px]"
              >
                Acessar Dashboard <FiArrowRight className="ml-1" size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}