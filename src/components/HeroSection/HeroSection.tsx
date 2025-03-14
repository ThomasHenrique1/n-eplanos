
// components/HeroSection.tsx
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  image?: string | StaticImageData // URL da logo (obrigatória)
  ctaText?: string; // Texto do botão de call-to-action (opcional)
  ctaLink?: string; // Link do botão de call-to-action (opcional)
}

export default function HeroSection({
  title,
  description,
  image,
  ctaText = "Faça sua Cotação", // Texto padrão do botão
  ctaLink = "/formulario", // Link padrão do botão
}: HeroSectionProps) {
  return (
    <section className="w-full text-white text-center py-32 relative overflow-hidden">
      {/* Logo como imagem de fundo com blur */}
      <div className="absolute inset-0">
        <Image
          src={image || ""}
          alt="Logo N&H Associados"
          fill // Preenche toda a área do contêiner
          sizes="100vw" // Define o tamanho correto da imagem para otimização
          style={{ objectFit: "cover" }} // Ajusta a imagem para cobrir toda a área
          className="filter blur-md opacity-50"
          priority
        />
      </div>

      {/* Overlay escuro para destacar o conteúdo */}
      <div className="absolute inset-0 bg-[#084040] bg-opacity-70"></div>

      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Título e Descrição */}
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <p className="text-lg mb-8">{description}</p>

        {/* Botão de Call-to-Action */}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block bg-[#A1C7D6] text-[#084040] font-bold py-3 px-8 rounded-lg shadow-md hover:bg-[#B8D9C0] hover:text-[#0D0D0D] transition"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
