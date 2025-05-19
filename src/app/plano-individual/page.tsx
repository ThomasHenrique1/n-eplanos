import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import Link from "next/link";
import { FaCheck, FaHospital, FaUserShield, FaFileAlt, FaPhoneAlt } from "react-icons/fa";

export default function PlanoIndividual() {
  
  const vantagens = [
    {
      title: "Atendimento Garantido",
      description: "Acesso a médicos, hospitais e laboratórios de referência",
      icon: <FaHospital className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Flexibilidade na Escolha",
      description: "Coberturas desde básicas até premium conforme sua necessidade",
      icon: <FaCheck className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Independência Total",
      description: "Sem necessidade de vínculo empregatício ou associativo",
      icon: <FaUserShield className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Segurança Financeira",
      description: "Proteção contra gastos inesperados com saúde",
      icon: <FaCheck className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Inclusão de Dependentes",
      description: "Adicione cônjuge e filhos ao seu plano",
      icon: <FaCheck className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Portabilidade de Carência",
      description: "Migre sem cumprir novos períodos de carência",
      icon: <FaCheck className="text-2xl text-[#0a4d4d]" />
    }
  ];

  const etapasContratacao = [
    {
      title: "Escolha a Operadora",
      description: "Selecione a melhor cobertura para suas necessidades"
    },
    {
      title: "Verifique Condições",
      description: "Compare preços, redes credenciadas e serviços inclusos"
    },
    {
      title: "Solicite Cotação",
      description: "Receba valores detalhados e avaliação personalizada"
    },
    {
      title: "Envie Documentos",
      description: "RG, CPF e comprovante de residência para contratação"
    },
    {
      title: "Ativação do Plano",
      description: "Use os serviços imediatamente após aprovação"
    }
  ];

  return (
    <div className="bg-[#F8FAFA]">
      {/* Hero Section Atualizada */}
      <HeroSection
        title="Plano de Saúde Individual"
        subtitle="Solução personalizada para sua saúde"
        description="Cobertura médica completa sem vínculo empresarial, com flexibilidade para incluir sua família"
        image="https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-planos//men%20independent%20person%20wellness.jpg"
      />

      <ContentContainer>
        {/* Seção 1: O que é */}
        <Section title="Conheça o Plano Individual" titleAlign="left" titleColor="dark">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#084040] mb-4">Autonomia para Cuidar da Sua Saúde</h3>
                <p className="text-[#0a4d4d] mb-4 leading-relaxed">
                  O <strong className="text-[#084040]">Plano de Saúde Individual</strong> é a opção ideal para quem busca cobertura médica independente, sem necessidade de vínculo com empresas ou entidades de classe.
                </p>
                <p className="text-[#0a4d4d] leading-relaxed">
                  Com total liberdade para escolher a operadora e o nível de cobertura que melhor atende suas necessidades, você garante acesso a uma rede credenciada de qualidade para você e sua família.
                </p>
              </div>
              <div className="bg-[#EFF9F9] rounded-lg p-6 border border-[#D0E8E8]">
                <h4 className="font-semibold text-[#084040] mb-3">Indicado para:</h4>
                <ul className="space-y-2 text-[#0a4d4d]">
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Profissionais autônomos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Quem não tem acesso a plano empresarial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Quem busca flexibilidade na contratação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Famílias que desejam cobertura personalizada</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Seção 2: Vantagens */}
        <Section title="Vantagens Exclusivas" titleAlign="center" titleColor="dark">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vantagens.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#E0F2F2]">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#EFF9F9] p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#084040] mb-2 text-center">{item.title}</h3>
                <p className="text-[#0a4d4d] text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Seção 3: Como contratar */}
        <Section title="Contratação em 5 Passos" titleAlign="center" titleColor="dark">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-8">
              {etapasContratacao.map((etapa, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#084040] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                    {index + 1}
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
                Tem dúvidas sobre o processo? Nossos consultores estão prontos para ajudar!
              </p>
              <div className="flex justify-center mt-3">
                <Link 
                  href="https://wa.me/5511992320742" 
                  className="flex items-center text-[#084040] font-medium hover:text-[#0a4d4d]"
                >
                  <FaPhoneAlt className="mr-2" /> Falar com Especialista
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Final */}
        <div className="mt-16 bg-gradient-to-r from-[#084040] to-[#0a4d4d] text-white py-12 px-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Pronto para Garantir Sua Saúde?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nossos especialistas estão prontos para encontrar o plano perfeito para você
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/formulario"
              className="bg-white text-[#084040] hover:bg-[#EFF9F9] px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
            >
              <FaFileAlt className="mr-2" /> Solicitar Cotação
            </Link>
           </div>
        </div>
      </ContentContainer>
    </div>
  );
}