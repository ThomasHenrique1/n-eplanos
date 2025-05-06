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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {/* Total de Leads */}
      <div className="bg-gradient-to-br from-[#084040] to-[#0D0D0D] p-3 md:p-4 rounded-lg border border-[#3A403F] shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#A1A6A2] text-xs md:text-sm font-medium">Total de Leads</p>
            <p className="text-white text-xl md:text-2xl font-bold mt-1">{total}</p>
          </div>
          <div className="bg-[#084040] p-2 md:p-3 rounded-full">
            <FiUsers className="text-white" size={18} />
          </div>
        </div>
        <div className="mt-2 md:mt-3 h-1 bg-[#3A403F] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#084040]" 
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>

      {/* Leads Contatados */}
      <div className="bg-gradient-to-br from-[#084040] to-[#0D0D0D] p-3 md:p-4 rounded-lg border border-[#3A403F] shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#A1A6A2] text-xs md:text-sm font-medium">Contatados</p>
            <p className="text-green-400 text-xl md:text-2xl font-bold mt-1">{contatados}</p>
          </div>
          <div className="bg-green-900/30 p-2 md:p-3 rounded-full">
            <FiCheckCircle className="text-green-400" size={18} />
          </div>
        </div>
        <div className="mt-2 md:mt-3 h-1 bg-[#3A403F] rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500" 
            style={{ width: `${total > 0 ? (contatados/total)*100 : 0}%` }}
          ></div>
        </div>
      </div>

      {/* Leads Pendentes */}
      <div className="bg-gradient-to-br from-[#084040] to-[#0D0D0D] p-3 md:p-4 rounded-lg border border-[#3A403F] shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#A1A6A2] text-xs md:text-sm font-medium">Pendentes</p>
            <p className="text-yellow-400 text-xl md:text-2xl font-bold mt-1">{pendentes}</p>
          </div>
          <div className="bg-yellow-900/30 p-2 md:p-3 rounded-full">
            <FiClock className="text-yellow-400" size={18} />
          </div>
        </div>
        <div className="mt-2 md:mt-3 h-1 bg-[#3A403F] rounded-full overflow-hidden">
          <div 
            className="h-full bg-yellow-500" 
            style={{ width: `${total > 0 ? (pendentes/total)*100 : 0}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}