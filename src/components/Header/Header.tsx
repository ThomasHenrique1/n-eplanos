'use client';
import Link from "next/link";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
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
        <div className="text-3xl font-bold">
          <Link href="/" className="flex flex-col items-start">
            <span className="text-[#A1C7D6] leading-none ml-[18px]">N&H</span>
            <span className="text-[#D9D9D9] text-xl leading-tight ">Associados</span>
          </Link>
        </div>

        {/* Menu de Navegação (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition text-xl font-semibold">
            Home
          </Link>
          <Link href="/servicos" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition text-xl font-semibold">
            Serviços
          </Link>
          <Link href="/sobre" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition text-xl font-semibold">
            Sobre Nós
          </Link>
        </nav>

        {/* Contato e WhatsApp (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://wa.me/5511992320742"
            className="flex items-center text-[#D9D9D9] hover:text-[#A1C7D6] transition text-xl"
          >
            <FaWhatsapp className="mr-2 text-2xl font-semibold" /> WhatsApp
          </a>
        </div>

        {/* Ícone do Menu Hamburguer (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#D9D9D9] hover:text-[#A1C7D6] transition">
            {isMenuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Menu de Navegação (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#084040]">
          <nav className="flex flex-col items-center space-y-6 py-6">
            <Link href="/" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition text-xl">
              Home
            </Link>
            <Link href="/servicos" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition text-xl">
              Serviços
            </Link>
            <Link href="/sobre" className="text-[#D9D9D9] hover:text-[#A1C7D6] transition text-xl">
              Sobre Nós
            </Link>
            <a
              href="https://wa.me/5511992320742"
              className="flex items-center text-[#D9D9D9] hover:text-[#A1C7D6] transition text-xl"
            >
              <FaWhatsapp className="mr-2 text-2xl" /> WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}