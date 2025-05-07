'use client';
import Link from "next/link";
import { FaArrowRight, FaEdit, FaFileAlt } from "react-icons/fa";

interface ButtonProps {
  text?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: 'arrow' | 'form' | 'file' | 'none';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function FormRedirectButton({
  text = "Acessar Formulário",
  variant = 'primary',
  icon = 'form',
  size = 'md',
  className = ""
}: ButtonProps) {
  // Tamanhos
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-5 py-3",
    lg: "text-lg px-6 py-3"
  };

  // Estilos base
  const baseStyle = "inline-flex items-center justify-center gap-3 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A1C7D6]";
  
  // Variantes
  const variants = {
    primary: "bg-[#A1C7D6] text-[#084040] hover:bg-[#7db0c8] shadow-lg hover:shadow-md transform transition-shadow",
    outline: "border-2 border-[#A1C7D6] text-[#A1C7D6] hover:bg-[#084040]/80 hover:text-[#A1C7D6] shadow-md",
    ghost: "text-[#A1C7D6] hover:bg-[#084040]/50 hover:text-[#D9D9D9]"
  };

  // Ícones
  const icons = {
    arrow: <FaArrowRight className="shrink-0" />,
    form: <FaEdit className="shrink-0" />,
    file: <FaFileAlt className="shrink-0" />,
    none: null
  };

  // Efeito de brilho para a variante primary
  const primaryGlow = variant === 'primary' 
    ? "relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)] after:opacity-0 hover:after:opacity-30 after:transition-opacity" 
    : "";

  return (
    <Link
      href="/formulario"
      className={`
        ${baseStyle}
        ${sizes[size]}
        ${variants[variant]}
        ${primaryGlow}
        ${className}
      `}
      aria-label={text}
    >
      {text}
      {icons[icon]}
    </Link>
  );
}