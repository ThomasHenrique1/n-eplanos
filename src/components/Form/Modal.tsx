import React from "react";
import { FaCheckCircle, FaTimesCircle, FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type: 'success' | 'error';
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type,
}) => {
  if (!isOpen) return null;

  const config = {
    success: {
      bgColor: 'bg-[#EFF9F9]',
      textColor: 'text-[#084040]',
      borderColor: 'border-[#0a4d4d]',
      icon: <FaCheckCircle className="text-5xl text-[#0a4d4d]" />,
      buttonClass: 'bg-[#0a4d4d] hover:bg-[#084040] text-white'
    },
    error: {
      bgColor: 'bg-red-50',
      textColor: 'text-red-800',
      borderColor: 'border-red-300',
      icon: <FaTimesCircle className="text-5xl text-red-500" />,
      buttonClass: 'bg-red-500 hover:bg-red-600 text-white'
    }
  };

  const { bgColor, textColor, borderColor, icon, buttonClass } = config[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[#ffffff00] bg-opacity-20 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Conteúdo do modal */}
      <div 
        className={`relative ${bgColor} p-8 rounded-xl shadow-2xl max-w-md w-full border ${borderColor} transition-all transform`}
      >
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="flex flex-col items-center gap-5 text-center">
          {/* Ícone */}
          <div className="mb-2">
            {icon}
          </div>
          
          {/* Título */}
          <h2 className={`text-2xl font-bold ${textColor}`}>{title}</h2>
          
          {/* Mensagem */}
          <p className={`${textColor} text-lg leading-relaxed`}>{message}</p>
          
          {/* Botão principal */}
          <button
            onClick={onClose}
            className={`mt-6 px-6 py-3 rounded-lg font-medium ${buttonClass} transition-colors w-full max-w-xs`}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;