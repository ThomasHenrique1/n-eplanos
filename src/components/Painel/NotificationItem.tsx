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
    className={`p-6 hover:bg-white/10 transition-all ${
      isUrgent ? 'bg-white/5' : ''
    }`}
  >
    <div className="flex items-start">
      <div className={`flex-shrink-0 mt-1 ${
        isNew ? 'text-green-400' : 'text-[#A1A6A2]'
      }`}>
        {isUrgent ? (
          <FiAlertTriangle size={20} className="text-yellow-400" />
        ) : (
          <FiUser size={20} />
        )}
      </div>
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">
            {isNew && (
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            )}
            {isUrgent && (
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            )}
            {nome}
          </h3>
          <span className="text-sm text-[#A1A6A2]">
            {data} às {hora}
          </span>
        </div>
        <p className="text-sm text-[#A1A6A2] mt-1">
          {isUrgent
            ? `⚠️ Urgente: Lead com ${daysOld} dias sem contato`
            : 'Aguardando contato'}
        </p>
      </div>
    </div>
  </li>
);