import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import { FaCheck, FaEnvelope } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5]">
      {/* HeroSection */}
      <HeroSection
        title="Política de Privacidade"
        description="Entenda como protegemos e utilizamos suas informações."
        image="/logo.jpg"
        ctaText="Entre em Contato"
        ctaLink="/formulario"
      />

      {/* ContentContainer para organizar o conteúdo */}
      <ContentContainer>
        {/* Seção 1: Quais Dados Coletamos? */}
        <Section title="1. Quais Dados Coletamos?">
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Coletamos apenas os dados essenciais para oferecer um serviço personalizado:
          </p>
          <ul className="space-y-3">
            {[
              "Nome completo",
              "Idade",
              "Telefone",
              "Preferência de contato",
              "Possui plano de saúde (sim/não)",
              "Possui CNPJ (sim/não)",
              "Possui formação acadêmica (sim/não)",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="text-green-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700 ">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Divisor */}
        <div className="border-b border-gray-200 my-8"></div>

        {/* Seção 2: Para Que Usamos Seus Dados? */}
        <Section title="2. Para Que Usamos Seus Dados?">
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Usamos seus dados apenas para:
          </p>
          <ul className="space-y-3">
            {[
              "Entrar em contato e fornecer informações sobre planos de saúde.",
              "Personalizar as recomendações de acordo com seu perfil.",
              "Melhorar nossos serviços e atendimento.",
              "Atender exigências legais e regulatórias.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="text-green-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-6 font-semibold leading-relaxed text-lg">
            Nenhum dado coletado será utilizado para fins de publicidade sem seu consentimento.
          </p>
        </Section>

        {/* Divisor */}
        <div className="border-b border-gray-200 my-8"></div>

        {/* Seção 3: Com Quem Compartilhamos Seus Dados? */}
        <Section title="3. Com Quem Compartilhamos Seus Dados?">
          <p className="text-gray-700 leading-relaxed text-lg">
            Os dados coletados <strong>não serão vendidos ou divulgados indevidamente</strong>.
            O compartilhamento ocorre apenas com
            <strong> administradoras e operadoras de planos de saúde</strong>,
            quando necessário para gerar propostas e simulações.
          </p>
        </Section>

        {/* Divisor */}
        <div className="border-b border-gray-200 my-8"></div>

        {/* Seção 4: Como Protegemos Seus Dados? */}
        <Section title="4. Como Protegemos Seus Dados?">
          <p className="text-gray-700 leading-relaxed text-lg">
            Todos os dados são armazenados em um ambiente seguro e restrito, com
            criptografia e protocolos modernos para evitar acessos não autorizados.
          </p>
        </Section>

        {/* Divisor */}
        <div className="border-b border-gray-200 my-8"></div>

        {/* Seção 5: Quais São Seus Direitos? */}
        <Section title="5. Quais São Seus Direitos?">
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">Você tem o direito de:</p>
          <ul className="space-y-3">
            {[
              "Solicitar acesso, correção ou exclusão de seus dados.",
              "Revogar seu consentimento a qualquer momento.",
              "Obter informações sobre como seus dados são utilizados.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="text-green-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-6 leading-relaxed text-lg">
            Tem dúvidas ou precisa de ajuda? Entre em contato conosco pelo e-mail:{" "}
            <strong>seuemail@dominio.com</strong>.
          </p>
        </Section>

        {/* Botão de Contato */}
        <div className="text-center mt-12">
          <a
            href="mailto:seuemail@dominio.com"
            className="bg-[#084040] text-white py-3 px-8 rounded-lg text-lg hover:bg-[#0a5757] transition-colors flex items-center justify-center space-x-2"
          >
            <FaEnvelope className="text-xl" />
            <span>Enviar E-mail</span>
          </a>
        </div>
      </ContentContainer>
    </div>
  );
};

export default PrivacyPolicy;