/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import Section from "../../components/Section/Section";
import BannerHero from "@/components/BannerHero/BannerHero";
import CardList from "@/components/CardList/CardList"; // Importe o componente
import ButtonCTA from "@/components/ButtonCTA/ButtonCTA";

export default function PlanoEmpresarial() {
  const vantagens = [
    {
      title: "Menor custo",
      description:
        "Tarifas reduzidas em comparação com planos individuais, oferecendo mais acessibilidade para todos.",
    },
    {
      title: "Redução da carência",
      description:
        "Empresas com mais de 30 vidas podem ter isenção ou redução do prazo de carência.",
    },
    {
      title: "Inclusão de dependentes",
      description:
        "Facilidade para incluir cônjuges, filhos e até sócios no plano.",
    },
    {
      title: "Ampla rede de atendimento",
      description:
        "Hospitais e clínicas renomadas à disposição para seus colaboradores.",
    },
    {
      title: "Aumento da produtividade",
      description:
        "Funcionários saudáveis têm menos faltas e um desempenho mais eficiente.",
    },
    {
      title: "Valorização da equipe",
      description:
        "Benefícios como plano de saúde ajudam a atrair e reter talentos.",
    },
    {
      title: "Coparticipação opcional",
      description:
        "Opção de dividir os custos com os colaboradores, aliviando o impacto financeiro para a empresa.",
    },
  ];

  const etapasContratacao = [
    {
      title: "1. Escolha a operadora e o plano",
      description:
        "Compare as opções de operadoras e planos que melhor atendem às necessidades da sua empresa.",
    },
    {
      title: "2. Defina os beneficiários",
      description:
        "Informe o número de funcionários e dependentes que serão incluídos no plano.",
    },
    {
      title: "3. Solicite uma cotação",
      description:
        "Peça uma cotação detalhada com valores e condições para sua empresa.",
    },
    {
      title: "4. Envie a documentação",
      description:
        "Documentos da empresa e dos beneficiários são necessários para formalizar o contrato.",
    },
    {
      title: "5. Finalize a contratação",
      description:
        "Após aprovação e pagamento, o plano será ativado e poderá ser utilizado imediatamente.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Hero */}
      <BannerHero
        title={"Plano de Saúde Empresarial"}
        description={"Benefícios para sua empresa e colaboradores"}
      />

      <div className="container mx-auto py-8 px-4 md:px-8">
        {/* Seção 1: O que é o Plano Empresarial? */}
        <Section title="O que é o Plano Empresarial?">
          <p className="text-lg text-gray-700 mb-4">
            O <strong>Plano de Saúde Empresarial</strong> é uma excelente opção
            para empresas que desejam garantir assistência médica de qualidade
            para seus colaboradores, melhorando o bem-estar e a produtividade no
            ambiente de trabalho.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Qualquer empresa, de pequeno ou grande porte, pode aderir ao plano.
            Além dos funcionários, é possível incluir{" "}
            <strong>sócios, cônjuges, filhos e prestadores de serviço</strong>,
            dependendo do plano escolhido.
          </p>
          <p className="text-lg text-gray-700">
            A adesão a planos empresariais também gera economia, com valores
            mais acessíveis e benefícios fiscais, como a dedução no Imposto de
            Renda.
          </p>
        </Section>

        {/* Seção 2: Vantagens do Plano Empresarial */}
        <Section title="Vantagens do Plano Empresarial">
          <p className="text-lg text-gray-700 mb-6">
            Um <strong>Plano de Saúde Empresarial</strong> traz benefícios tanto
            para a empresa quanto para seus colaboradores. Confira algumas das
            vantagens:
          </p>
          <CardList items={vantagens} /> {/* Use o componente aqui */}
        </Section>

        {/* Seção 3: Como Contratar */}
        <Section title="Como Contratar?">
          <p className="text-lg text-gray-700 mb-6">
            A contratação do <strong>Plano de Saúde Empresarial</strong> é
            rápida e prática. Siga o passo a passo abaixo:
          </p>
          <CardList items={etapasContratacao} columns={2} /> {/* Use o componente aqui */}
          <ButtonCTA />
       
        </Section>
      </div>
    </div>
  );
}