import Section from "../../components/Section/Section";
import BannerHero from "@/components/BannerHero/BannerHero";
import CardList from "@/components/CardList/CardList"; 
import ButtonCTA from "@/components/ButtonCTA/ButtonCTA";

export default function PlanoFamiliar() {
  const vantagens = [
    {
      title: "Cobertura para toda a família",
      description:
        "Um único plano que atende todas as idades, garantindo saúde e bem-estar para todos.",
    },
    {
      title: "Custo-benefício",
      description:
        "Planos familiares são mais econômicos do que contratar planos individuais para cada membro.",
    },
    {
      title: "Rede credenciada ampla",
      description:
        "Atendimento em hospitais, laboratórios e clínicas renomadas em todo o Brasil.",
    },
    {
      title: "Facilidade na administração",
      description:
        "Um único contrato para gerenciar toda a saúde da família com praticidade.",
    },
    {
      title: "Inclusão de dependentes",
      description:
        "Inclua cônjuge, filhos e até mesmo pais ou sogros no plano.",
    },
    {
      title: "Atendimento exclusivo",
      description:
        "Suporte personalizado para esclarecer dúvidas e oferecer auxílio sempre que precisar.",
    },
  ];

  const etapasContratacao = [
    {
      title: "1. Escolha a operadora e o plano",
      description:
        "Compare as opções e selecione a melhor cobertura para sua família.",
    },
    {
      title: "2. Defina os beneficiários",
      description:
        "Inclua cônjuge, filhos e outros dependentes conforme as regras do plano.",
    },
    {
      title: "3. Solicite uma cotação",
      description:
        "Entre em contato para receber valores detalhados e comparar benefícios.",
    },
    {
      title: "4. Envie os documentos",
      description:
        "RG, CPF e comprovantes de parentesco dos beneficiários são necessários.",
    },
    {
      title: "5. Ativação do plano",
      description:
        "Após aprovação e pagamento, o plano estará ativo e pronto para uso.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Hero */}
      <BannerHero
        title={"Plano de Saúde Familiar"}
        description={"Cuidando da saúde de quem mais importa para você"}
      />

      <div className="container mx-auto py-8 px-4 md:px-8">
        {/* Seção 1: O que é o Plano Familiar? */}
        <Section title="O que é o Plano Familiar?">
          <p className="text-lg text-gray-700 mb-4">
            O <strong>Plano de Saúde Familiar</strong> é a solução ideal para
            quem deseja oferecer proteção completa à família. Com um único
            plano, é possível garantir acesso a consultas, exames, internações e
            atendimento em hospitais e clínicas renomadas para todos os seus
            entes queridos.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Além de mais segurança, esse plano oferece um excelente
            custo-benefício, reduzindo os gastos individuais com saúde. Ele é
            ideal para quem busca praticidade e quer manter toda a família
            coberta em um só contrato.
          </p>
          <p className="text-lg text-gray-700">
            Se você valoriza o bem-estar da sua família e deseja um atendimento
            médico de qualidade, o Plano Familiar é a escolha perfeita.
          </p>
        </Section>

        {/* Seção 2: Vantagens do Plano Familiar */}
        <Section title="Vantagens do Plano Familiar">
          <p className="text-lg text-gray-700 mb-6">
            Confira os principais benefícios do{" "}
            <strong>Plano de Saúde Familiar</strong>:
          </p>
          <CardList items={vantagens} /> {/* Use o componente aqui */}
        </Section>

        {/* Seção 3: Como Contratar */}
        <Section title="Como Contratar?">
          <p className="text-lg text-gray-700 mb-6">
            A contratação do <strong>Plano de Saúde Familiar</strong> é simples
            e rápida. Veja o passo a passo:
          </p>
          <CardList items={etapasContratacao} columns={2} /> {/* Use o componente aqui */}
          <ButtonCTA />
        </Section>
      </div>
    </div>
  );
}