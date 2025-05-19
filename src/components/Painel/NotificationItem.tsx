import { FiUser, FiAlertTriangle } from 'react-icons/fi';

export const NotificationItem = ({
  id,
  nome,
  data,
  hora,
  isNew,
  isUrgent,
  daysOld
}: {
  id: string;
  nome: string;
  data: string;
  hora: string;
  isNew: boolean;
  isUrgent: boolean;
  daysOld: number;
}) => (
  <li 
    key={id} 
    className={`
      p-5 border-b border-white/5 last:border-0
      transition-all duration-200 ease-in-out
      ${isUrgent ? 'bg-gradient-to-r from-amber-900/10 to-transparent' : ''}
      ${isNew ? 'hover:bg-white/5' : 'hover:bg-white/[3%]'}
      group
    `}
  >
    <div className="flex items-start gap-4">
      <div className={`
        flex-shrink-0 p-2 rounded-lg
        ${isUrgent 
          ? 'bg-amber-400/10 text-amber-400' 
          : isNew 
            ? 'bg-green-400/10 text-green-400' 
            : 'bg-white/5 text-white/60'
        }
        transition-colors duration-200
      `}>
        {isUrgent ? (
          <FiAlertTriangle size={18} className="shrink-0" />
        ) : (
          <FiUser size={18} className="shrink-0" />
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-medium text-white/90 truncate">
            {isNew && (
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 align-middle animate-pulse"></span>
            )}
            {isUrgent && (
              <span className="inline-block w-2 h-2 bg-amber-400 rounded-full mr-2 align-middle animate-pulse"></span>
            )}
            {nome}
          </h3>
          <span className="text-xs text-white/60 whitespace-nowrap">
            {data} <span className="text-white/40">às</span> {hora}
          </span>
        </div>
        
        <p className={`
          text-sm mt-1
          ${isUrgent 
            ? 'text-amber-300/100' 
            : 'text-white/60'
          }
        `}>
          {isUrgent
            ? `⚠️ Urgente: Lead com ${daysOld} ${daysOld === 1 ? 'dia' : 'dias'} sem contato`
            : 'Aguardando contato'}
        </p>
      </div>
    </div>
  </li>
);