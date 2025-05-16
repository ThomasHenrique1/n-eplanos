import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string | StaticImageData;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  image,
  ctaText,
  ctaLink
}: HeroSectionProps) {
  return (
    <section className="w-full text-white text-center py-17 md:py-28 relative overflow-hidden">
      {/* Imagem de fundo */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#084040cc] to-[#0a4d4dcc]"></div>
        </div>
      )}

      {/* Conteúdo compacto */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight drop-shadow-md">
            {title}
          </h1>
          
          {subtitle && (
            <h2 className="text-lg md:text-xl mb-4 font-medium opacity-90">
              {subtitle}
            </h2>
          )}
          
          <p className="text-base md:text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          
          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className="inline-block bg-white text-[#084040] hover:bg-[#f0f0f0] px-6 py-2 rounded-lg font-semibold text-base transition-colors duration-300 shadow-md"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}