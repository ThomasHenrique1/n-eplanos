import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import Section from "@/components/Section/Section";
import Link from "next/link";
import CardList from "@/components/CardList/CardList";

const AboutPage = () => {
    const benefits = [
        { title: "Atendimento Personalizado", description: "Corretores experientes prontos para encontrar a melhor solução para você." },
        { title: "Planos Sob Medida", description: "Opções individuais, empresariais e coletivas por adesão, com coberturas que atendem diferentes necessidades." },
        { title: "Parceria com Administradoras Renomadas", description: "Trabalhamos com empresas confiáveis para garantir segurança e benefícios exclusivos." },
        { title: "Suporte Completo", description: "Acompanhamento dedicado antes, durante e após a contratação do seu plano." },
     ];
     

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5]">
      {/* HeroSection */}
      <HeroSection
        title="Sobre Nós"
        description="Conheça nossa história, missão e valores. Somos especialistas em planos de saúde, oferecendo soluções personalizadas para você e sua empresa."
        image="/logo.jpg" // Imagem local
        ctaText="Entre em Contato"
        ctaLink="/formulario"
      />

      {/* ContentContainer para organizar o conteúdo */}
      <ContentContainer>
        {/* Seção: Nossa História */}
        <Section title="Nossa História">
          <p className="text-gray-700 text-lg mb-6">
            Somos uma rede de corretores autônomos especializados em planos de saúde, com anos de experiência no mercado. Nosso compromisso é oferecer soluções personalizadas e transparentes, conectando você aos melhores planos de saúde disponíveis.
          </p>
          <p className="text-gray-700 text-lg">
            Trabalhamos com as principais operadoras e administradoras do país, garantindo cobertura completa e atendimento de qualidade para indivíduos, famílias e empresas de todos os portes.
          </p>
        </Section>

        {/* Seção: Nossa Missão */}
        <Section title="Nossa Missão">
          <p className="text-gray-700 text-lg mb-6">
            Facilitar o acesso a planos de saúde de qualidade, proporcionando uma experiência confiável, ágil e sem burocracia para nossos clientes. Queremos ser seu parceiro na busca pelo bem-estar e segurança da sua saúde.
          </p>
        </Section>

        {/* Seção: Por que Escolher Nossos Serviços? */}
        <Section title="Por que Escolher Nossos Serviços?">
          <CardList items={benefits}  />
        </Section>

        {/* Seção: Nossos Valores */}
        <Section title="Nossos Valores">
          <p className="text-gray-700 text-lg mb-6">
            Nossa atuação é guiada por valores como ética, transparência e comprometimento. Acreditamos que cada cliente merece um atendimento personalizado e soluções que realmente atendam às suas necessidades.
          </p>
        </Section>

        {/* Seção: Fale Conosco */}
        <section className="text-center mt-16">
          <h2 className="text-2xl font-bold text-[#084040] mb-6">
            Fale Conosco
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Estamos à disposição para esclarecer dúvidas e ajudá-lo a encontrar o plano de saúde ideal. Entre em contato conosco e descubra como podemos ajudar.
          </p>
          <Link
            href="/formulario"
            className="bg-[#084040] text-white py-3 px-8 rounded-lg text-lg hover:bg-[#0a5757] transition-colors"
          >
            Entre em Contato
          </Link>
        </section>
      </ContentContainer>
    </div>
  );
};

export default AboutPage;