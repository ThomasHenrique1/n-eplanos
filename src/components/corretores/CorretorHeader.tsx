import { FiUser } from 'react-icons/fi';

export default function CorretorHeader({ nome }: { nome: string | null }) {
  return (
    <header className="bg-[#084040] text-white rounded-xl shadow-lg mb-2 overflow-hidden">
      <div className="relative">
        {/* Faixa decorativa */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0d0d0de1] via-[#084040] to-[#0D0D0D]"></div>
        
        <div className="p-4 text-center">
          {/* Logo/Título */}
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center justify-center mb-3">
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
          
          {/* Nome do Corretor */}
          {nome && (
            <div className="mt-6">
              <div className="text-lg text-[#A1A6A2] mb-1">Bem-vindo</div>
              <div className="text-2xl md:text-3xl font-medium bg-white/5 px-6 py-3 rounded-lg inline-block border border-white/10 backdrop-blur-sm">
                {nome}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}