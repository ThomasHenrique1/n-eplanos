'use client';
import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
//import Logo from "../../public/Logo.jpg";
//import Image, { StaticImageData } from "next/image";


export default function Home() {
  // URLs das imagens dos planos de saúde
  const imageUrls = [
    'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/amil.png',
    'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/bradescosaude.png',
    'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/hapvida.png',
    'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/medsenior.webp',
    'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/notredame.png',
    'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/portoseguro.png',
    'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/qualicorp.png',
    'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/sulamerica.png',
    'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/unimedseguros.webp',
  ];

  const imageUrls2 = 'https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//Logo.jpg';

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5]">
      <HeroSection
          title="Seu Plano de Saúde Ideal Está Aqui!"
          description="Garanta o melhor plano de saúde para você e sua família com preços acessíveis."
          image={imageUrls2} // Passa a logo como imagem de fundo
          ctaText="Faça sua Cotação" // Texto do botão
          ctaLink="/formulario" // Link do botão
        />
      {/* Seção de Benefícios */}
      
      <section className="w-full max-w-4xl mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-[#084040]">
          Por que escolher a <span className="text-[#3A403F]">N&H Associados</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 text-center bg-[#F2D7B6] rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#084040]">Planos Acessíveis</h3>
            <p className="text-[#3A403F]">Opções que cabem no seu bolso sem perder qualidade.</p>
          </div>
          <div className="p-4 text-center bg-[#B8D9C0] rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#084040]">Cobertura Nacional</h3>
            <p className="text-[#3A403F]">Atendimento em todo o Brasil com ampla rede credenciada.</p>
          </div>
          <div className="p-4 text-center bg-[#A1C7D6] rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#084040]">Atendimento 24h</h3>
            <p className="text-[#3A403F]">Suporte especializado sempre que precisar.</p>
          </div>
        </div>
      </section>

      {/* Seção de Logos de Planos de Saúde */}
      <Section 
      title={"Planos de Saúde que Trabalhamos"}>
        <p className="mb-6 text-gray-600">
        Trabalhamos com as principais operadoras do mercado. Confira algumas delas:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="w-full flex justify-center p-4 bg-[#ffffff] rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={url}
                alt={`Logo do plano de saúde ${index + 1}`}
                className="w-40 h-40 object-contain"
              />
            </div>
          ))}
        </div>
     </Section>

      {/* Seção de Chamada para Ação */}
      <section className="w-full max-w-4xl text-center mt-10 p-6 bg-[#084040] text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Pronto para cuidar da sua saúde?</h2>
        <p className="text-lg mt-2">Clique no botão abaixo e faça sua cotação agora mesmo.</p>
        <Link
          href="/formulario"
          className="mt-4 inline-block bg-[#A1C7D6] text-[#084040] font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#B8D9C0] hover:text-[#0D0D0D] transition"
        >
          Cotação Gratuita
        </Link>
      </section>
    </main>
  );
}