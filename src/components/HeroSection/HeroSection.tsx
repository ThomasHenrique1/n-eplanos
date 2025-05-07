import React from "react";
import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string | StaticImageData; // URL da imagem de fundo (opcional)
  ctaText?: string; // Texto do botão de call-to-action (opcional)
  ctaLink?: string; // Link do botão de call-to-action (opcional)
}

export default function HeroSection({
  title,
  subtitle,
  description,
  image,
}: HeroSectionProps) {
  return (
    <section className="w-full text-white text-center py-32 relative overflow-hidden">
      {/* Imagem de fundo (opcional) */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

     {/* Overlay com blur para destacar o conteúdo */}
      <div className="absolute inset-0 bg-[#114e4ea8] bg-opacity-20 backdrop-blur-sm z-10"></div>

      {/* Conteúdo do Hero */}
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl font-bold mb-6 text-white">{title}</h1>
          <h2 className="text-2xl font-bold mb-6 text-white">{subtitle}</h2>
          <p className="text-lg mb-8 font-semibold text-white">{description}</p>
      </div>
    </section>
  );
}