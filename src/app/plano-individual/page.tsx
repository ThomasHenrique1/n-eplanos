import Section from "../../components/Section/Section";
import BannerHero from "@/components/BannerHero/BannerHero";
import CardList from "@/components/CardList/CardList"; 
import ButtonCTA from "@/components/ButtonCTA/ButtonCTA";

export default function PlanoIndividual() {
  const vantagens = [
    {
      title: "Atendimento Garantido",
      description:
        "Tenha acesso a médicos, hospitais e laboratórios de referência no mercado.",
    },
    {
      title: "Flexibilidade na Escolha",
      description:
        "Opte pelo plano que melhor atende às suas necessidades, desde coberturas básicas até premium.",
    },
    {
      title: "Independência Total",
      description:
        "Não é necessário vínculo empregatício ou associação a entidades de classe para contratar o plano.",
    },
    {
      title: "Segurança Financeira",
      description:
        "Evite gastos inesperados com consultas e procedimentos médicos particulares.",
    },
    {
      title: "Inclusão de Dependentes",
      description:
        "Adicione cônjuge e filhos ao seu plano, garantindo proteção para toda a família.",
    },
    {
      title: "Portabilidade de Carência",
      description:
        "Migre de plano sem cumprir novos períodos de carência, conforme as regras da ANS.",
    },
  ];

  const etapasContratacao = [
    {
      title: "1. Escolha a Operadora e o Plano",
      description:
        "Avalie as opções disponíveis e selecione a melhor cobertura para suas necessidades.",
    },
    {
      title: "2. Verifique Condições e Benefícios",
      description:
        "Compare preços, redes credenciadas e serviços inclusos em cada plano.",
    },
    {
      title: "3. Solicite uma Cotação",
      description:
        "Entre em contato para receber valores detalhados e avaliar a melhor proposta.",
    },
    {
      title: "4. Envie os Documentos",
      description:
        "Apresente RG, CPF e comprovante de residência para concluir a contratação.",
    },
    {
      title: "5. Ativação do Plano",
      description:
        "Após a aprovação e o pagamento, seu plano será ativado e você poderá usufruir dos serviços imediatamente.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Hero */}
      <BannerHero
        title={"Plano de Saúde Individual"}
        description={"Proteção e autonomia para você e sua família"}
      />

      <div className="container mx-auto py-8 px-4 md:px-8">
        {/* Seção 1: O que é o Plano Individual? */}
        <Section title="O que é o Plano Individual?">
          <p className="text-lg text-gray-700 mb-4">
            O <strong>Plano de Saúde Individual</strong> é a opção ideal para
            quem busca uma cobertura de saúde personalizada e independente, sem
            a necessidade de estar vinculado a uma empresa ou entidade de
            classe.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Com esse plano, você garante acesso a uma rede credenciada de
            hospitais, clínicas e laboratórios de qualidade, podendo escolher o
            nível de cobertura que melhor se adapta às suas necessidades. Além
            disso, o plano individual oferece a possibilidade de inclusão de
            dependentes, como cônjuges e filhos, proporcionando mais segurança
            para toda a família.
          </p>
          <p className="text-lg text-gray-700">
            Se você valoriza autonomia e deseja um atendimento médico garantido
            sem precisar depender de terceiros, o Plano de Saúde Individual é a
            escolha ideal.
          </p>
        </Section>

        {/* Seção 2: Vantagens do Plano Individual */}
        <Section title="Vantagens do Plano Individual">
          <p className="text-lg text-gray-700 mb-6">
            O <strong>Plano de Saúde Individual</strong> oferece uma série de
            benefícios que garantem mais tranquilidade e segurança para você e
            sua família:
          </p>
          <CardList items={vantagens} /> {/* Use o componente aqui */}
        </Section>

        {/* Seção 3: Como Contratar */}
        <Section title="Como Contratar?">
          <p className="text-lg text-gray-700 mb-6">
            A contratação de um <strong>Plano de Saúde Individual</strong> é
            simples e rápida. Siga os passos abaixo para garantir sua cobertura
            médica com toda segurança e praticidade:
          </p>
          <CardList items={etapasContratacao} columns={2} /> {/* Use o componente aqui */}
          <ButtonCTA />
        </Section>
      </div>
    </div>
  );
}