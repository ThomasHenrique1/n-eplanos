'use client';
import AddInfo from "@/components/AddInfo/AddInfo";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import ContractTypesSection from "@/components/ContractTypesSection/ContractTypesSection";
import HealthPlansSection from "@/components/HealthPlansSection/HealthPlansSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import PlanLinks from "@/components/PlanLinks/PlanLinks";
import Section from "@/components/Section/Section";

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



  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5]">
      <HeroSection
        title="Seu Plano de Saúde Ideal Está Aqui!"
        description="Garanta o melhor plano de saúde para você e sua família com preços acessíveis."
        image="/logo.jpg" // Imagem local
        ctaText="Faça sua Cotação"
        ctaLink="/formulario"
      />
      {/* Container de conteúdo */}
      <ContentContainer>
      
      {/* Seção de Links de cada plano */}
      <PlanLinks />
    
      {/* Seção de Imagem da logo do plano de saude */}
      <Section 
      title={"Planos de Saúde que Trabalhamos"}>
        <p className="mb-6 text-gray-600">
        Trabalhamos com as principais operadoras do mercado. Confira algumas delas:
        </p>
       <HealthPlansSection imageUrls={imageUrls} />
     </Section>

      {/* Opções e Informações de planos */}
      <Section title="Contratação de Planos de Saúde: Entenda Suas Opções">
        <div className="text-gray-600 leading-relaxed">
          <AddInfo />
        </div>
      </Section>

      {/* Tipos de Contratação */}
      <Section title="Tipos de Contratação">
        <ContractTypesSection />
      </Section>

      </ContentContainer>
      
    </main>
  );
}