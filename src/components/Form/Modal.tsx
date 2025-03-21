/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  icon: string | React.ReactNode; // Aceita URL ou ícone do react-icons
  backgroundColor: string;
  textColor: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  icon,
  backgroundColor,
  textColor,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`${backgroundColor} p-6 rounded-lg shadow-lg max-w-md w-full mx-4`}>
        <div className="flex flex-col items-center gap-4">
          {/* Exibe uma imagem se o ícone for uma URL, caso contrário, exibe o ícone do react-icons */}
          {typeof icon === "string" ? (
            <img src={icon} alt="Ícone" className="w-16 h-16" />
          ) : (
            <div className={`text-6xl ${textColor}`}>{icon}</div>
          )}
          <h2 className={`text-2xl font-bold ${textColor}`}>{title}</h2>
          <p className={`text-center ${textColor}`}>{message}</p>
          <button
            onClick={onClose}
            className={`mt-4 px-6 py-2 ${textColor} border ${textColor} rounded-lg hover:bg-opacity-80 transition-colors`}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;