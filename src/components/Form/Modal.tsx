/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type: 'success' | 'error';
  iconUrl: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type,
  iconUrl,
}) => {
  if (!isOpen) return null;

  const config = {
    success: {
      bgColor: 'bg-green-50',
      textColor: 'text-green-800',
      buttonColor: 'bg-green-500',
    },
    error: {
      bgColor: 'bg-red-50',
      textColor: 'text-red-800',
      buttonColor: 'bg-red-500',
    }
  };

  const { bgColor, textColor, buttonColor } = config[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay com blur */}
      <div className="absolute inset-0  bg-opacity-10 backdrop-blur" onClick={onClose}></div>
      
      {/* Conteúdo do modal */}
      <div className={`relative ${bgColor} p-6 rounded-lg shadow-xl max-w-md w-full mx-4 border ${textColor} border-opacity-20`}>
        <div className="flex flex-col items-center gap-4">
          <img 
            src={iconUrl} 
            alt="Ícone" 
            className="w-16 h-16"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <h2 className={`text-xl font-bold ${textColor}`}>{title}</h2>
          <p className={`text-center ${textColor}`}>{message}</p>
          <button
            onClick={onClose}
            className={`mt-4 px-6 py-2 rounded-lg ${buttonColor} text-white hover:opacity-80 transition-opacity`}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;