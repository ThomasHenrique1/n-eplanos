import { FiBell } from 'react-icons/fi';

export const NotificationsHeader = ({ count }: { count: number }) => (
  <div className="flex items-center justify-between p-6 border-b border-white/10">
    <h2 className="text-xl font-semibold flex items-center gap-3">
      <FiBell className="text-[#A1A6A2]" /> 
      <span>Atividades Recentes</span>
      {count > 0 && (
        <span className="bg-[#084040] text-white text-sm px-2 py-1 rounded-full">
          {count}
        </span>
      )}
    </h2>
    <div className="flex items-center gap-2 text-sm">
      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
      <span>Novo</span>
      <span className="w-2 h-2 bg-yellow-400 rounded-full ml-2"></span>
      <span>Urgente</span>
    </div>
  </div>
);