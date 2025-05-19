import Link from "next/link";
import Section from "@/components/Section/Section";
import HeroSection from "@/components/HeroSection/HeroSection";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import HowItWorksSection from "@/components/HowItWorksSection/HowItWorksSection";
import { FaBuilding, FaUsers, FaChartLine, FaHandshake, FaFileAlt, FaCheck, FaHospital } from "react-icons/fa";

export default function PlanoEmpresarial() {
  const vantagens = [
    {
      title: "Economia Empresarial",
      description: "Tarifas reduzidas em comparação com planos individuais",
      icon: <FaChartLine className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Carência Reduzida",
      description: "Isenção ou redução para empresas com +30 vidas",
      icon: <FaCheck className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Dependentes Inclusos",
      description: "Cônjuges, filhos e sócios podem ser incluídos",
      icon: <FaUsers className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Rede Ampliada",
      description: "Hospitais e clínicas renomadas em todo país",
      icon: <FaHospital className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Produtividade",
      description: "Colaboradores saudáveis = maior desempenho",
      icon: <FaCheck className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Retenção de Talentos",
      description: "Atrai e mantém os melhores profissionais",
      icon: <FaCheck className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Coparticipação",
      description: "Opção de dividir custos com colaboradores",
      icon: <FaHandshake className="text-2xl text-[#0a4d4d]" />
    }
  ];

  const etapasContratacao = [
    {
      step: "1",
      title: "Escolha o Plano",
      description: "Selecione a operadora e cobertura ideal para sua empresa"
    },
    {
      step: "2",
      title: "Defina Beneficiários",
      description: "Quantidade de colaboradores e dependentes"
    },
    {
      step: "3",
      title: "Solicite Cotação",
      description: "Receba valores personalizados para sua empresa"
    },
    {
      step: "4",
      title: "Envie Documentos",
      description: "Contrato social e documentos dos beneficiários"
    }
  ];

  const tamanhosEmpresa = [
    {
      title: "Pequenas Empresas",
      range: "2-30 vidas",
      benefits: ["Economia imediata", "Flexibilidade", "Rápida implementação"]
    },
    {
      title: "Médias Empresas",
      range: "31-100 vidas",
      benefits: ["Redução de carência", "Condições especiais", "Gestão simplificada"]
    },
    {
      title: "Grandes Empresas",
      range: "101+ vidas",
      benefits: ["Planos customizados", "Consultoria dedicada", "Benefícios exclusivos"]
    }
  ];

  return (
    <div className="bg-[#F8FAFA]">
      {/* Hero Section Atualizada */}
      <HeroSection
        title="Plano de Saúde Empresarial"
        subtitle="Solução completa para a saúde dos seus colaboradores"
        description="Benefícios corporativos com condições especiais para empresas de todos os portes"
        image="https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-planos//corporate%20health%20plan.jpg"
      />

      <ContentContainer>
        {/* Seção 1: O que é */}
        <Section title="Solução Corporativa em Saúde" titleAlign="left" titleColor="dark">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#084040] mb-4">Vantagens Competitivas para Sua Empresa</h3>
                <p className="text-[#0a4d4d] mb-4 leading-relaxed">
                  O <strong className="text-[#084040]">Plano de Saúde Empresarial</strong> oferece cobertura médica de qualidade para seus colaboradores, com condições diferenciadas que só são possíveis através de contratações coletivas.
                </p>
                <p className="text-[#0a4d4d] leading-relaxed">
                  Ideal para empresas que valorizam o bem-estar de seus times e buscam vantagens fiscais e operacionais na gestão de benefícios.
                </p>
              </div>
              <div className="bg-[#EFF9F9] rounded-lg p-6 border border-[#D0E8E8]">
                <h4 className="font-semibold text-[#084040] mb-3">Quem pode contratar:</h4>
                <ul className="space-y-2 text-[#0a4d4d]">
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Empresas de qualquer porte (MEI a grandes corporações)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Associações e cooperativas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Profissionais liberais com CNPJ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Startups em crescimento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Seção 2: Como funciona */}
        <Section title="Como Funciona" titleAlign="center" titleColor="dark">
          <HowItWorksSection />
        </Section>

        {/* Seção 3: Para diferentes portes */}
        <Section title="Soluções por Porte de Empresa" titleAlign="center" titleColor="dark">
          <div className="grid md:grid-cols-3 gap-6">
            {tamanhosEmpresa.map((tamanho, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#E0F2F2]">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#EFF9F9] p-4 rounded-full">
                    <FaBuilding className="text-2xl text-[#0a4d4d]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#084040] mb-2 text-center">{tamanho.title}</h3>
                <p className="text-[#0a4d4d] font-medium text-center mb-4">{tamanho.range}</p>
                <ul className="space-y-2 text-[#0a4d4d]">
                  {tamanho.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#A1C7D6] mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Seção 4: Vantagens */}
        <Section title="Vantagens para Sua Empresa" titleAlign="center" titleColor="dark">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vantagens.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#E0F2F2]">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#EFF9F9] p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#084040] mb-2 text-center">{item.title}</h3>
                <p className="text-[#0a4d4d] text-sm text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Seção 5: Como contratar */}
        <Section title="Contratação em 4 Passos" titleAlign="center" titleColor="dark">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              {etapasContratacao.map((etapa, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#084040] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                    {etapa.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#084040]">{etapa.title}</h3>
                    <p className="text-[#0a4d4d] mt-1">{etapa.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-[#EFF9F9] p-4 rounded-lg border border-[#D0E8E8]">
              <p className="text-[#084040] font-medium text-center">
                Documentação necessária para contratação
              </p>
              <ul className="flex flex-wrap justify-center gap-2 mt-3 text-sm">
                {['Contrato Social', 'Documentos dos Sócios', 'Lista de Beneficiários', 'Comprovante de Endereço'].map((doc, i) => (
                  <li key={i} className="bg-white px-3 py-1 rounded-full border border-[#D0E8E8]">
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* CTA Final */}
        <div className="mt-16 bg-gradient-to-r from-[#084040] to-[#0a4d4d] text-white py-12 px-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Invista na Saúde dos Seus Colaboradores</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite uma proposta personalizada para sua empresa
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/formulario"
              className="bg-white text-[#084040] hover:bg-[#EFF9F9] px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
            >
              <FaFileAlt className="mr-2" /> Cotação
            </Link>
            
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}