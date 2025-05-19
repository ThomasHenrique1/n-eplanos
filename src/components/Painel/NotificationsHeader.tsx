import { FiBell } from 'react-icons/fi';

export const NotificationsHeader = ({ count }: { count: number }) => (
  <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm">
    <h2 className="text-xl font-semibold flex items-center gap-3">
      <div className="relative">
        <FiBell className="text-white/80" size={20} />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#084040] text-white text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center min-w-[20px] h-5 shadow-sm">
            {count}
          </span>
        )}
      </div>
      <span className="text-white/90">Atividades Recentes</span>
    </h2>
    
    <div className="flex items-center gap-3 text-sm text-white/80">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
        <span>Novo</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse delay-100"></span>
        <span>Urgente</span>
      </div>
    </div>
  </div>
);