import { FiUsers, FiCheckCircle, FiClock } from 'react-icons/fi';

export default function CorretorStats({ 
  total, 
  contatados, 
  pendentes 
}: {
  total: number;
  contatados: number;
  pendentes: number;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
      {/* Total de Leads */}
      <div className="bg-gradient-to-br from-[#0a2e2e] to-[#084040]/90 p-4 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs uppercase tracking-wider font-medium mb-1">Total de Leads</p>
            <p className="text-white text-2xl font-bold">{total}</p>
          </div>
          <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-all duration-300">
            <FiUsers className="text-white" size={20} />
          </div>
        </div>
        <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#084040] to-[#0a5e5e] rounded-full" 
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>

      {/* Leads Contatados */}
      <div className="bg-gradient-to-br from-[#0a2e2e] to-[#084040]/90 p-4 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs uppercase tracking-wider font-medium mb-1">Contatados</p>
            <p className="text-green-400 text-2xl font-bold">{contatados}</p>
            
          </div>
          <div className="bg-green-400/10 p-3 rounded-full group-hover:bg-green-400/20 transition-all duration-300">
            <FiCheckCircle className="text-green-400" size={20} />
          </div>
        </div>
        <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" 
            style={{ width: `${total > 0 ? (contatados/total)*100 : 0}%` }}
          ></div>
        </div>
      </div>

      {/* Leads Pendentes */}
      <div className="bg-gradient-to-br from-[#0a2e2e] to-[#084040]/90 p-4 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs uppercase tracking-wider font-medium mb-1">Pendentes</p>
            <p className="text-amber-400 text-2xl font-bold">{pendentes}</p>
          </div>
          <div className="bg-amber-400/10 p-3 rounded-full group-hover:bg-amber-400/20 transition-all duration-300">
            <FiClock className="text-amber-400" size={20} />
          </div>
        </div>
        <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" 
            style={{ width: `${total > 0 ? (pendentes/total)*100 : 0}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}