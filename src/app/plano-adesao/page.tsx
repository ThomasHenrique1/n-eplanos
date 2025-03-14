import Section from "../../components/Section/Section";
import BannerHero from "@/components/BannerHero/BannerHero";
import CardList from "@/components/CardList/CardList"; 
import ButtonCTA from "@/components/ButtonCTA/ButtonCTA";

export default function PlanoAdesao() {
  const vantagens = [
    {
      title: "Descontos especiais",
      description:
        "Planos com valores mais acessíveis do que os planos individuais ou familiares convencionais.",
    },
    {
      title: "Rede ampla de atendimento",
      description:
        "Hospitais, clínicas e médicos renomados à disposição para os beneficiários.",
    },
    {
      title: "Facilidade na inclusão de dependentes",
      description:
        "Você pode incluir cônjuge, filhos e até outros familiares conforme as regras do contrato.",
    },
    {
      title: "Planos personalizados",
      description:
        "Opções variadas de cobertura, desde planos ambulatoriais até coberturas completas com internação.",
    },
    {
      title: "Regulamentação da ANS",
      description:
        "Todos os planos seguem as normas da Agência Nacional de Saúde Suplementar (ANS), garantindo segurança e confiabilidade.",
    },
    {
      title: "Facilidade na adesão",
      description:
        "Processo de contratação simples e rápido, sem burocracia excessiva.",
    },
  ];

  const etapasContratacao = [
    {
      title: "1. Escolha o plano ideal",
      description:
        "Compare as opções de planos disponíveis e selecione a cobertura que melhor atende às suas necessidades.",
    },
    {
      title: "2. Preencha o formulário",
      description:
        "Forneça informações básicas para que possamos personalizar o plano para você.",
    },
    {
      title: "3. Aguarde o contato",
      description:
        "Um consultor entrará em contato para apresentar todas as condições e esclarecer dúvidas.",
    },
    {
      title: "4. Envie a documentação",
      description:
        "Envie documentos como RG, CPF, comprovante de vínculo com a categoria e outros conforme exigido.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Hero */}
      <BannerHero
        title={"Plano de Saúde por Adesão"}
        description={"Benefícios para profissionais e suas famílias"}
      />

      <div className="container mx-auto py-8 px-4 md:px-8">
        {/* Seção 1: O que é o Plano por Adesão? */}
        <Section title="O que é o Plano por Adesão?">
          <p className="text-lg text-gray-700 mb-4">
            O <strong>Plano de Saúde por Adesão</strong> é uma opção acessível e
            vantajosa para profissionais vinculados a entidades de classe,
            sindicatos, associações ou conselhos de profissão regulamentada.
            Diferente dos planos individuais, ele funciona como um contrato
            coletivo, permitindo que os participantes tenham acesso a condições
            especiais e tarifas reduzidas.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Essa modalidade de plano permite que profissionais autônomos e
            liberais tenham um <strong>custo mais acessível</strong> e, ao mesmo
            tempo, contem com uma cobertura ampla e de qualidade. Além disso,
            ele possibilita a inclusão de dependentes, garantindo segurança para
            toda a família.
          </p>
        </Section>

        {/* Seção 2: Vantagens do Plano por Adesão */}
        <Section title="Vantagens do Plano por Adesão">
          <p className="text-lg text-gray-700 mb-6">
            Ao escolher um <strong>Plano de Saúde por Adesão</strong>, você tem
            acesso a benefícios exclusivos que tornam essa modalidade muito mais
            atrativa. Veja algumas das principais vantagens:
          </p>
          <CardList items={vantagens} /> {/* Use o componente aqui */}
        </Section>

        {/* Seção 3: Como Contratar? */}
        <Section title="Como Contratar?">
          <p className="text-lg text-gray-700 mb-6">
            A contratação de um <strong>Plano de Saúde por Adesão</strong> é
            simples e direta. Basta seguir os passos abaixo:
          </p>
          <CardList items={etapasContratacao} columns={2} /> {/* Use o componente aqui */}
          <ButtonCTA />
        </Section>
      </div>
    </div>
  );
}