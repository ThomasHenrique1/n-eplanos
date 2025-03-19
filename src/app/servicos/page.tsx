import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection/HeroSection";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import Section from "@/components/Section/Section";

const ServicesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5]">
      {/* HeroSection com título e descrição adequados */}
      <HeroSection
        title="Nossos Serviços"
        description="Oferecemos consultoria especializada em planos de saúde para indivíduos e empresas. Encontre a solução ideal para suas necessidades."
        image="/logo.jpg" // Imagem local
        ctaText="Faça sua Cotação"
        ctaLink="/formulario"
      />

      {/* ContentContainer para organizar o conteúdo */}
      <ContentContainer>
        {/* Seção 1: Consultoria Personalizada */}
        <Section title="Consultoria Personalizada para Planos de Saúde">
          <p className="text-gray-700 text-lg mb-6">
            Nossos corretores autônomos oferecem consultoria especializada para ajudá-lo a encontrar o plano de saúde ideal para
            suas necessidades. Seja para indivíduos ou empresas, trabalhamos com você para oferecer as melhores opções de planos,
            com foco na sua saúde e bem-estar.
          </p>
          <p className="text-gray-700 text-lg">
            Com um atendimento ágil e personalizado, garantimos que você tenha acesso aos planos mais vantajosos do mercado,
            levando em consideração seu perfil, preferências e orçamento.
          </p>
        </Section>

        {/* Seção 2: Atendimento a Empresas */}
        <Section title="Atendimento a Empresas">
          <p className="text-gray-700 text-lg mb-6">
            Se você é responsável pela gestão de benefícios de uma empresa, nossos corretores são especialistas em planos de
            saúde empresariais. Trabalhamos diretamente com administradores para oferecer soluções flexíveis que atendam às
            necessidades dos seus colaboradores e reduzam os custos com saúde.
          </p>
          <p className="text-gray-700 text-lg">
            Desde a escolha do plano até a implementação, fornecemos todo o suporte necessário para garantir que sua empresa
            ofereça um benefício de saúde de qualidade.
          </p>
        </Section>

        {/* Seção 3: Atendimento para Pessoas Físicas */}
        <Section title="Atendimento para Pessoas Físicas">
          <p className="text-gray-700 text-lg mb-6">
            Se você está em busca de um plano de saúde para sua família, nossos corretores irão guiá-lo em cada etapa do
            processo, desde a escolha do plano até a contratação. Temos planos para todas as necessidades, com cobertura
            completa para consultas, exames e hospitalizações.
          </p>
          <p className="text-gray-700 text-lg">
            Além disso, podemos ajudá-lo a utilizar sua categoria profissional para obter descontos e vantagens especiais.
          </p>
        </Section>

        {/* Seção 4: Processo de Contratação */}
        <Section title="Como Funciona o Processo de Contratação?">
          <p className="text-gray-700 text-lg mb-6">
            O processo de contratação do seu plano de saúde começa com uma análise detalhada das suas necessidades. A partir daí,
            nossos corretores autônomos irão apresentar as opções mais adequadas e facilitar toda a documentação necessária.
          </p>
          <p className="text-gray-700 text-lg">
            A contratação é simples, sem burocracia, e o suporte continua após a escolha do plano, para garantir que você
            tenha toda a assistência necessária.
          </p>
        </Section>

        {/* Seção 5: Chamada para Ação */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-bold text-[#084040] mb-6">
            Pronto para Encontrar o Seu Plano de Saúde?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Entre em contato conosco agora mesmo e vamos encontrar a melhor solução para você ou sua empresa. Clique abaixo para
            solicitar uma cotação personalizada.
          </p>
          <Link
            href="/formulario"
            className="bg-[#084040] text-white py-3 px-8 rounded-lg text-lg hover:bg-[#0a5757] transition-colors"
          >
            Faça sua Cotação
          </Link>
        </section>
      </ContentContainer>
    </div>
  );
};

export default ServicesPage;