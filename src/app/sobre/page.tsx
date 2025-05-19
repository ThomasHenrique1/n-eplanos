import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import Section from "@/components/Section/Section";
import Link from "next/link";
import { FaHandshake, FaUserTie, FaShieldAlt, FaHeadset } from "react-icons/fa";

const AboutPage = () => {
  const benefits = [
    { 
      title: "Atendimento Personalizado", 
      description: "Corretores experientes prontos para encontrar a melhor solução para você.",
      icon: <FaUserTie className="text-3xl text-[#0a4d4d] mb-3" />
    },
    { 
      title: "Planos Sob Medida", 
      description: "Opções individuais, empresariais e coletivas por adesão, com coberturas completas.",
      icon: <FaShieldAlt className="text-3xl text-[#0a4d4d] mb-3" />
    },
    { 
      title: "Parcerias Renomadas", 
      description: "Trabalhamos com as melhores operadoras para garantir segurança e benefícios.",
      icon: <FaHandshake className="text-3xl text-[#0a4d4d] mb-3" />
    },
    { 
      title: "Suporte Completo", 
      description: "Acompanhamento dedicado em todas as etapas do seu plano de saúde.",
      icon: <FaHeadset className="text-3xl text-[#0a4d4d] mb-3" />
    },
  ];

  return (
    <div className="bg-[#F8FAFA]">
      {/* HeroSection - Sugestão de melhoria */}
      <HeroSection
         title="Conheça Nossa História"
         subtitle="Especialistas em planos de saúde com compromisso e transparência"
         description="Somos uma equipe de corretores dedicados a conectar você aos melhores planos de saúde do mercado."
        image="https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//Sobre%20Nos.jpg"
      />

      <ContentContainer>
        {/* Seção: Nossa História */}
        <Section title="Nossa Jornada" 
        titleAlign="center" titleColor="dark">
          <div className="bg-white p-8 rounded-xl shadow-sm">
        <p className="text-[#000000] text-lg leading-relaxed mb-6">
          Nossa rede de corretores autônomos nasceu do compromisso de oferecer um atendimento mais humano, transparente e eficiente na intermediação de planos de saúde. Fundada por especialistas com mais de 15 anos de experiência no setor, reunimos conhecimento prático e sensibilidade para entender as reais necessidades de cada cliente.
        </p>
        <p className="text-[#000000] text-lg leading-relaxed">
          Atuamos com um portfólio amplo de planos de saúde regulamentados pela ANS, oferecendo opções de diferentes operadoras e categorias. Nosso objetivo é encontrar a solução mais adequada para você, com base em critérios como cobertura, rede credenciada, custo-benefício e perfil de contratação.
        </p>

          </div>
        </Section>

        {/* Seção: Missão e Valores */}
        <Section title="Nosso Compromisso" titleAlign="center" titleColor="dark">
  <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
    {/* Card Missão */}
    <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#084040]">
      <div className="flex items-start mb-4">
        <div className="bg-[#EFF9F9] p-3 rounded-full mr-4">
          <svg className="w-6 h-6 text-[#084040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#084040]">Missão</h3>
      </div>
      <p className="text-[#0a4d4d] pl-14 leading-relaxed">
        Facilitar o acesso a planos de saúde de qualidade, proporcionando uma experiência confiável e personalizada, com transparência em todas as etapas do processo.
      </p>
    </div>

    {/* Card Valores */}
    <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#084040]">
      <div className="flex items-start mb-4">
        <div className="bg-[#EFF9F9] p-3 rounded-full mr-4">
          <svg className="w-6 h-6 text-[#084040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#084040]">Valores</h3>
      </div>
      <ul className="space-y-3 text-[#0a4d4d] pl-14">
        <li className="flex items-start">
          <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
          <span>Ética e transparência em todas as relações</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
          <span>Atendimento humanizado e personalizado</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
          <span>Compromisso com resultados eficazes</span>
        </li>
        <li className="flex items-start">
          <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
          <span>Inovação constante em nossos serviços</span>
        </li>
      </ul>
    </div>
  </div>
</Section>

        {/* Seção: Benefícios - Atualizada */}
        <Section title="Por Que Nos Escolher?" titleAlign="center" titleColor="dark">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#084040] my-3">{item.title}</h3>
                <p className="text-[#0a4d4d]">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Seção: CTA Final */}
        <div className="w-full py-16 bg-white mt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#084040] mb-6">
                Pronto para Proteger Sua Saúde?
              </h2>
              <p className="text-[#0a4d4d] text-lg mb-8 leading-relaxed">
                Nossos especialistas estão prontos para te ajudar a encontrar o plano perfeito para suas necessidades.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/formulario"
                  className="inline-flex justify-center items-center bg-[#084040] hover:bg-[#0a5757] text-white font-medium py-3 px-8 rounded-md transition-colors whitespace-nowrap"
                >
                  Solicitar Cotação
                </Link>
                <Link
                  href="https://wa.me/5511992320742"
                  className="inline-flex justify-center items-center border-2 border-[#084040] text-[#084040] hover:bg-[#F0F9F9] font-medium py-3 px-8 rounded-md transition-colors whitespace-nowrap"
                >
                  Falar com Consultor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default AboutPage;