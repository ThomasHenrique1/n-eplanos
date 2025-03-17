import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  image?: string | StaticImageData; // URL da imagem de fundo (opcional)
  ctaText?: string; // Texto do botão de call-to-action (opcional)
  ctaLink?: string; // Link do botão de call-to-action (opcional)
}

export default function HeroSection({
  title,
  description,
  image,
  ctaText = "Faça sua Cotação",
  ctaLink = "/formulario",
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
      <div className="absolute inset-0 bg-[#0f7c7c36] bg-opacity-70 backdrop-blur-sm z-10"></div>

      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-4 relative z-20">
        <h1 className="text-4xl font-bold mb-6 text-green-300">{title}</h1>
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