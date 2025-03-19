import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "../../components/Section/Section";
import CardList from "@/components/CardList/CardList";
import ContentContainer from "@/components/ContentContainer/ContentContainer";

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
  ];

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5] hyphens-auto">
      {/* Banner Hero */}
      <HeroSection
        title="Plano de Saúde Familiar"
        description="Proteja quem você ama com cobertura completa e benefícios exclusivos."
        image="/logo.jpg" // Imagem local
        ctaText="Faça sua Cotação"
        ctaLink="/formulario"
      />
      <ContentContainer>
      <div className="container mx-auto py-12 px-4 md:px-8">
        {/* Seção 1: O que é o Plano Familiar? */}
        <Section title="O que é o Plano Familiar?">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            O <strong className="text-[#084040]">Plano de Saúde Familiar</strong> é a solução ideal para
            quem deseja oferecer proteção completa à família. Com um único
            plano, é possível garantir acesso a consultas, exames, internações e
            atendimento em hospitais e clínicas renomadas para todos os seus
            entes queridos.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Além de mais segurança, esse plano oferece um excelente
            custo-benefício, reduzindo os gastos individuais com saúde. Ele é
            ideal para quem busca praticidade e quer manter toda a família
            coberta em um só contrato.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Se você valoriza o bem-estar da sua família e deseja um atendimento
            médico de qualidade, o Plano Familiar é a escolha perfeita.
          </p>
        </Section>

        {/* Seção 2: Vantagens do Plano Familiar */}
        <Section title="Vantagens do Plano Familiar">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Confira os principais benefícios do{" "}
            <strong className="text-[#084040]">Plano de Saúde Familiar</strong>:
          </p>
          <CardList items={vantagens} />
        </Section>

        {/* Seção 3: Como Contratar */}
        <Section title="Como Contratar?">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            A contratação do <strong className="text-[#084040]">Plano de Saúde Familiar</strong> é simples
            e rápida. Veja o passo a passo:
          </p>
          <CardList items={etapasContratacao} columns={3} />
        </Section>
      </div>
      </ContentContainer>
    </div>
    
  );
}