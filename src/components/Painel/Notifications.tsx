import { FiAlertTriangle, FiBell, FiMail, FiUser } from "react-icons/fi";

export default function notification(){
    return(
        <div className="bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm overflow-hidden mb-8">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold flex items-center gap-3">
              <FiBell className="text-[#A1A6A2]" /> 
              <span>Atividades Recentes</span>
              {notifications.length > 0 && (
                <span className="bg-[#084040] text-white text-sm px-2 py-1 rounded-full">
                  {notifications.length}
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

          {notifications.length > 0 ? (
            <ul className="divide-y divide-white/10">
              {notifications.map(notification => (
                <li 
                  key={notification.id} 
                  className={`p-6 hover:bg-white/10 transition-all ${
                    notification.isUrgent ? 'bg-white/5' : ''
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 mt-1 ${
                      notification.isNew ? 'text-green-400' : 'text-[#A1A6A2]'
                    }`}>
                      {notification.isUrgent ? (
                        <FiAlertTriangle size={20} className="text-yellow-400" />
                      ) : (
                        <FiUser size={20} />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">
                          {notification.isNew && (
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          )}
                          {notification.isUrgent && (
                            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                          )}
                          {notification.nome}
                        </h3>
                        <span className="text-sm text-[#A1A6A2]">
                          {notification.data} às {notification.hora}
                        </span>
                      </div>
                      <p className="text-sm text-[#A1A6A2] mt-1">
                        {notification.isUrgent
                          ? `⚠️ Urgente: Lead com ${notification.daysOld} dias sem contato`
                          : 'Aguardando contato'}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-8 text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiMail className="text-[#A1A6A2]" size={24} />
              </div>
              <p className="text-lg">Nenhuma notificação recente</p>
              <p className="text-sm text-[#A1A6A2] mt-1">Você está em dia com seus leads!</p>
            </div>
          )}
        </div>
    )
}