import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import { FaShieldAlt, FaUserLock, FaEnvelope, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F8FAFA]">
      {/* HeroSection atualizado */}
      <HeroSection
        title="Política de Privacidade"
        subtitle="Transparência e segurança no tratamento de seus dados"
        description="Saiba como protegemos e utilizamos suas informações pessoais"
        image="https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/logo-principal//privacy.jpg" // Sugiro uma imagem temática
      />

      <ContentContainer>
        {/* Seção 1: Dados Coletados */}
        <Section title="1. Dados Coletados" titleAlign="left" titleColor="dark">
          <p className="text-[#0a4d4d] mb-6 text-lg">
            Coletamos apenas informações essenciais para oferecer um serviço personalizado de consultoria em planos de saúde:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-[#A1C7D6] pl-4">
              <h3 className="font-semibold text-[#084040] mb-2">Informações Pessoais</h3>
              <ul className="space-y-2 text-[#0a4d4d]">
                {['Nome completo', 'Idade', 'Telefone', 'Preferência de contato'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaChevronRight className="text-[#A1C7D6] text-xs mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-4 border-[#A1C7D6] pl-4">
              <h3 className="font-semibold text-[#084040] mb-2">Informações Profissionais</h3>
              <ul className="space-y-2 text-[#0a4d4d]">
                {['Possui plano de saúde', 'Possui CNPJ', 'Formação acadêmica'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaChevronRight className="text-[#A1C7D6] text-xs mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Divisor visual */}
        <div className="my-8 flex justify-center">
          <div className="h-1 w-24 bg-[#A1C7D6] rounded-full"></div>
        </div>

        {/* Seção 2: Finalidade */}
        <Section title="2. Finalidade dos Dados" titleAlign="left" titleColor="dark">
          <div className="flex items-start mb-6">
            <FaShieldAlt className="text-[#0a4d4d] text-2xl mr-4 mt-1 flex-shrink-0" />
            <p className="text-[#0a4d4d]">
              Seus dados são utilizados exclusivamente para:
            </p>
          </div>
          <ul className="space-y-4 pl-12">
            {[
              "Fornecer informações personalizadas sobre planos de saúde",
              "Realizar simulações e propostas adequadas ao seu perfil",
              "Melhorar continuamente nossos serviços",
              "Atender obrigações legais e regulatórias"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="bg-[#EFF9F9] p-1 rounded-full mr-3">
                  <div className="w-2 h-2 bg-[#084040] rounded-full"></div>
                </div>
                <span className="text-[#0a4d4d]">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-[#EFF9F9] rounded-lg">
            <p className="text-[#084040] font-medium">
              Nenhum dado será utilizado para marketing sem sua autorização explícita.
            </p>
          </div>
        </Section>

        {/* Seção 3: Compartilhamento */}
        <Section title="3. Compartilhamento de Dados" titleAlign="left" titleColor="dark">
          <div className="flex items-start">
            <FaUserLock className="text-[#0a4d4d] text-2xl mr-4 mt-1 flex-shrink-0" />
            <div>
              <p className="text-[#0a4d4d] mb-4">
                Seus dados <strong>não são comercializados</strong> e só são compartilhados quando necessário para:
              </p>
              <ul className="space-y-2 pl-2">
                {[
                  "Gerar propostas com operadoras de saúde",
                  "Atender exigências legais",
                  "Processar contratações de planos"
                ].map((item, i) => (
                  <li key={i} className="flex items-baseline">
                    <span className="text-[#A1C7D6] mr-2">▸</span>
                    <span className="text-[#0a4d4d]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Seção 4: Proteção */}
        <Section title="4. Segurança dos Dados" titleAlign="left" titleColor="dark">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="font-semibold text-[#084040] mb-3">Medidas de Proteção</h3>
              <p className="text-[#0a4d4d]">
                Utilizamos criptografia, firewalls e protocolos de segurança avançados para proteger todas as informações coletadas.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#084040] mb-3">Acesso Restrito</h3>
              <p className="text-[#0a4d4d]">
                Somente pessoas autorizadas têm acesso aos dados, mediante autenticação rigorosa.
              </p>
            </div>
          </div>
        </Section>

        {/* Seção 5: Direitos */}
        <Section title="5. Seus Direitos" titleAlign="left" titleColor="dark">
          <p className="text-[#0a4d4d] mb-6">
            Conforme a Lei Geral de Proteção de Dados (LGPD), você possui direitos sobre seus dados pessoais:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Acesso", desc: "Solicitar cópia dos dados que possuímos sobre você" },
              { title: "Correção", desc: "Atualizar informações incompletas ou desatualizadas" },
              { title: "Exclusão", desc: "Solicitar a eliminação de seus dados em determinadas situações" },
              { title: "Portabilidade", desc: "Receber seus dados em formato estruturado" }
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-[#A1C7D6] pl-4">
                <h4 className="font-semibold text-[#084040]">{item.title}</h4>
                <p className="text-[#0a4d4d] text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Final */}
        <div className="mt-16 text-center bg-[#084040] rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Dúvidas ou Solicitações?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Entre em contato com nosso Encarregado de Proteção de Dados:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:privacidade@seudominio.com"
              className="bg-white text-[#084040] hover:bg-[#EFF9F9] py-3 px-6 rounded-lg font-medium inline-flex items-center justify-center"
            >
              <FaEnvelope className="mr-2" />
              Enviar E-mail
            </a>
            <Link
              href="/formulario"
              className="border-2 border-white text-white hover:bg-white hover:text-[#084040] py-3 px-6 rounded-lg font-medium inline-flex items-center justify-center"
            >
              <FaChevronRight className="mr-2" />
              Formulário de Contato
            </Link>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default PrivacyPolicy;