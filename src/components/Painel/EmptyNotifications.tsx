import { FiMail } from 'react-icons/fi';

export const EmptyNotifications = () => (
  <div className="p-8 text-center">
    <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
      <FiMail className="text-[#A1A6A2]" size={24} />
    </div>
    <p className="text-lg">Nenhuma notificação recente</p>
    <p className="text-sm text-[#A1A6A2] mt-1">Você está em dia com seus leads!</p>
  </div>
);