import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection/HeroSection";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import Section from "@/components/Section/Section";

const ServicesPage = () => {
  return (
    <div className="bg-[#F8FAFA]">
      {/* HeroSection mantido conforme original */}
      <HeroSection
        title="Nossos Serviços"
        description="Oferecemos consultoria especializada em planos de saúde para indivíduos e empresas. Encontre a solução ideal para suas necessidades."
        image="/logo.jpg"
        ctaText="Faça sua Cotação"
        ctaLink="/formulario"
      />

      <ContentContainer>
        {/* Seção 1: Consultoria Personalizada - Versão refinada */}
        <Section title="Consultoria Especializada" className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="border-l-4 border-[#0a4d4d] pl-6">
              <h3 className="text-xl font-semibold text-[#084040] mb-3">Para Você</h3>
              <p className="text-[#0a4d4d] leading-relaxed">
                Nossos corretores oferecem consultoria personalizada para ajudar você a encontrar o plano de saúde ideal, com foco nas suas necessidades específicas e orçamento.
              </p>
              <div className="mt-4">
                <Link
                  href="/formulario"
                  className="inline-flex items-center text-[#084040] font-medium hover:text-[#0a5757] transition-colors group"
                >
                  Solicitar cotação personalizada
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            <div className="border-l-4 border-[#0a4d4d] pl-6">
              <h3 className="text-xl font-semibold text-[#084040] mb-3">Para Empresas</h3>
              <p className="text-[#0a4d4d] leading-relaxed">
                Soluções completas para gestores de RH e administradores, com planos empresariais que reduzem custos sem comprometer a qualidade da assistência médica.
              </p>
              <div className="mt-4">
                <Link
                  href="/formulario?tipo=empresarial"
                  className="inline-flex items-center text-[#084040] font-medium hover:text-[#0a5757] transition-colors group"
                >
                  Cotação para empresas
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            <div className="border-l-4 border-[#0a4d4d] pl-6">
              <h3 className="text-xl font-semibold text-[#084040] mb-3">Para Famílias</h3>
              <p className="text-[#0a4d4d] leading-relaxed">
                Cobertura completa para quem mais importa, com condições especiais para grupos familiares e aproveitamento de descontos por categoria profissional.
              </p>
              <div className="mt-4">
                <Link
                  href="/formulario?tipo=familiar"
                  className="inline-flex items-center text-[#084040] font-medium hover:text-[#0a5757] transition-colors group"
                >
                  Proteja sua família
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Seção 2: Diferenciais - Versão minimalista */}
        <Section title="Por Que Nos Escolher?" className="bg-white py-12 rounded-lg">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#084040] mb-2">Atendimento Ágil</h3>
              <p className="text-[#0a4d4d]">Resposta em até 24h úteis para suas consultas</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#084040] mb-2">Cobertura Nacional</h3>
              <p className="text-[#0a4d4d]">Rede credenciada em todo o território nacional</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#084040] mb-2">Transparência</h3>
              <p className="text-[#0a4d4d]">Sem letras miúdas ou informações ocultas</p>
            </div>
          </div>
        </Section>

        <div className="w-full bg-white py-16">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-[#084040] mb-6">
        Pronto para Encontrar Seu Plano Ideal?
      </h2>
      <p className="text-[#0a4d4d] text-lg mb-8 leading-relaxed">
        Nossos especialistas estão prontos para te ajudar a escolher a melhor opção para sua saúde e bem-estar.
      </p>
      <div className="flex justify-center">
        <Link
          href="/formulario"
          className="bg-[#084040] hover:bg-[#0a5757] text-white font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center"
        >
          Iniciar Minha Cotação
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</div>
      </ContentContainer>
    </div>
  );
};

export default ServicesPage;