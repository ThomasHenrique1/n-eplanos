'use client';
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#084040] shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo ou Nome da Empresa */}
        <div className="text-2xl font-bold">
          <Link href="/" className="flex flex-col items-end">
            <span className="text-[#A1C7D6]">N&H</span>
            <span className="text-[#D9D9D9] text-lg">Associados</span>
          </Link>
        </div>

        {/* Menu de Navegação (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition">
            Home
          </Link>
          <Link href="/servicos" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition">
            Serviços
          </Link>
          <Link href="/sobre" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition">
            Sobre Nós
          </Link>
          <Link href="/contato" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition">
            Contato
          </Link>
        </nav>

        {/* Contato e WhatsApp (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+551112345678"
            className="flex items-center text-[#D9D9D9] hover:text-[#A1C7D6] transition"
          >
            <FaPhoneAlt className="mr-2" /> (11) 1234-5678
          </a>
          <a
            href="https://wa.me/551112345678"
            className="flex items-center text-[#D9D9D9] hover:text-[#A1C7D6] transition"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
        </div>

        {/* Ícone do Menu Hamburguer (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#D9D9D9] hover:text-[#A1C7D6] transition">
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Menu de Navegação (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#084040]">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition">
              Home
            </Link>
            <Link href="/servicos" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition">
              Serviços
            </Link>
            <Link href="/sobre" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition">
              Sobre Nós
            </Link>
            <Link href="/contato" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition">
              Contato
            </Link>
            <a
              href="tel:+551112345678"
              className="flex items-center text-[#D9D9D9] hover:text-[#A1C7D6] transition"
            >
              <FaPhoneAlt className="mr-2" /> (11) 1234-5678
            </a>
            <a
              href="https://wa.me/551112345678"
              className="flex items-center text-[#D9D9D9] hover:text-[#A1C7D6] transition"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}