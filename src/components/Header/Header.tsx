'use client';
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import FormRedirectButton from "../FormRedirectButton/FormRedirectButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Política", path: "/politica" }
  ];

  return (
    <header className="bg-gradient-to-r from-[#084040] to-[#0a4d4d] shadow-lg sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4">
        {/* Barra principal */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
            <div className="flex items-center">
              <Image
                src="https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//android-chrome-512x512.png"
                alt="N&H Associados"
                width={260}  // Tamanho inicial - ajuste conforme necessário
                height={260}
                className="h-21 w-auto md:h-30 transition-all duration-300 hover:scale-105"
                priority
              />
              {/* Opcional: Texto ao lado da imagem se quiser manter */}
              {/* <span className="ml-3 text-[#f0f0f0] text-lg font-medium hidden sm:block">Associados</span> */}
            </div>
          </Link>
          {/* Desktop Navigation - CENTRALIZADO */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <nav className="flex gap-8 text-5xl">
              {navItems.map((item) => (
                <Link
                  href={item.path}
                  key={item.name}
                  className="relative text-[#f0f0f0] hover:text-[#A1C7D6] text-2xl font-medium top-2 transition-colors"
                >
                  <span className="relative py-1">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A1C7D6] transition-all duration-300 hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Botão de Contato à direita */}
          <div className="hidden md:flex ml-auto">
          <FormRedirectButton 
            text="Contato" 
            variant="outline" 
            icon="file" 
            size="md"
          />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[#f0f0f0] hover:text-[#A1C7D6] p-2 transition-colors"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a5555] pb-4 animate-fadeIn">
            <nav className="flex flex-col divide-y divide-[#1a6a6a]">
              {navItems.map((item) => (
                <Link
                  href={item.path}
                  key={item.name}
                  className="px-4 py-3 text-[#f0f0f0] hover:text-[#A1C7D6] text-lg font-medium transition-colors text-center"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <FormRedirectButton 
                  text="Contato"
                  variant="outline"
                  icon="form"
                  className="w-full justify-center text-base"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}