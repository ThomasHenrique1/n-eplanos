'use client';
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
      <a
        href="https://wa.me/5511992320742"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg transition-all duration-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}