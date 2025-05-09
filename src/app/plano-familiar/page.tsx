/* eslint-disable @next/next/no-img-element */
import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import Link from "next/link";
import { FaUsers, FaHeartbeat, FaHospital, FaFileAlt, FaPhoneAlt, FaCheck } from "react-icons/fa";

export default function PlanoFamiliar() {
  const vantagens = [
    {
      title: "Cobertura Completa",
      description: "Atendimento para toda a família em um único plano",
      icon: <FaUsers className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Economia Familiar",
      description: "Custos reduzidos em comparação a planos individuais",
      icon: <FaCheck className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Rede Ampliada",
      description: "Hospitais e clínicas em todo o país",
      icon: <FaHospital className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Gestão Simplificada",
      description: "Um único contrato para toda a família",
      icon: <FaFileAlt className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Dependentes Inclusos",
      description: "Cônjuge, filhos e outros parentes",
      icon: <FaCheck className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Suporte Dedicado",
      description: "Atendimento personalizado para sua família",
      icon: <FaHeartbeat className="text-2xl text-[#0a4d4d]" />
    }
  ];

  const etapasContratacao = [
    {
      step: "1",
      title: "Escolha o Plano",
      description: "Selecione a cobertura ideal para sua família"
    },
    {
      step: "2",
      title: "Defina os Membros",
      description: "Inclua todos os dependentes no plano"
    },
    {
      step: "3",
      title: "Solicite Cotação",
      description: "Receba valores personalizados"
    },
    {
      step: "4",
      title: "Envie Documentos",
      description: "RG, CPF e comprovantes de parentesco"
    }
  ];

  const operadoras = [
    { nome: "Amil", logo: "https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/amil.png" },
    { nome: "Bradesco Saúde", logo: "https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/bradescosaude.png" },
    { nome: "SulAmérica", logo: "https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/sulamerica.png" },
    { nome: "Unimed", logo: "https://tovqhpslvhvyfpeqmvkf.supabase.co/storage/v1/object/public/image-logo/unimedseguros.webp" }
  ];

  return (
    <div className="bg-[#F8FAFA]">
      {/* Hero Section Atualizada */}
      <HeroSection
        title="Plano de Saúde Familiar"
        subtitle="Proteção completa para quem você ama"
        description="Cobertura médica integrada para toda a família com condições especiais"
        image="/logo.jpg"
        ctaText="Cotação para Família"
        ctaLink="/formulario?tipo=familiar"
      />

      <ContentContainer>
        {/* Seção 1: O que é */}
        <Section title="Proteção Familiar" className="mt-16">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#084040] mb-4">Saúde Integrada para Sua Família</h3>
                <p className="text-[#0a4d4d] mb-4 leading-relaxed">
                  O <strong className="text-[#084040]">Plano de Saúde Familiar</strong> oferece cobertura completa para todos os membros da família em um único contrato, com condições especiais e economia significativa.
                </p>
                <p className="text-[#0a4d4d] leading-relaxed">
                  Ideal para quem busca praticidade e quer garantir atendimento médico de qualidade para cônjuge, filhos e outros dependentes elegíveis.
                </p>
              </div>
              <div className="bg-[#EFF9F9] rounded-lg p-6 border border-[#D0E8E8]">
                <h4 className="font-semibold text-[#084040] mb-3">Quem pode incluir:</h4>
                <ul className="space-y-2 text-[#0a4d4d]">
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Cônjuge ou companheiro(a)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Filhos até 21 anos (ou 24 se estudante)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Filhos de qualquer idade com deficiência</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#A1C7D6] text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span>Pais (em alguns planos)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Seção 2: Vantagens */}
        <Section title="Vantagens do Plano Familiar" className="mt-16">
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
        <Section title="Contrate em 4 Passos" className="mt-16">
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
                Documentos necessários para inclusão de dependentes
              </p>
              <ul className="flex flex-wrap justify-center gap-2 mt-3 text-sm">
                {['RG', 'CPF', 'Certidão de Casamento', 'Comprovante de Residência', 'Declaração de Escolaridade'].map((doc, i) => (
                  <li key={i} className="bg-white px-3 py-1 rounded-full border border-[#D0E8E8]">
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Seção 4: Operadoras */}
        <Section title="Nossas Operadoras Parceiras" className="mt-16">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-[#0a4d4d] text-center mb-8 max-w-2xl mx-auto">
              Trabalhamos com as melhores operadoras do mercado para oferecer cobertura de qualidade para sua família
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {operadoras.map((operadora, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-[#F8FAFA] rounded-lg">
                  <div className="w-32 h-20 flex items-center">
                    <img 
                      src={operadora.logo} 
                      alt={operadora.nome} 
                      className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Final */}
        <div className="mt-16 bg-gradient-to-r from-[#084040] to-[#0a4d4d] text-white py-12 px-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Proteja Sua Família Hoje</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Converse com nossos especialistas e encontre o plano perfeito para quem você ama
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/formulario?tipo=familiar"
              className="bg-white text-[#084040] hover:bg-[#EFF9F9] px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
            >
              <FaFileAlt className="mr-2" /> Cotação Familiar
            </Link>
            <Link
              href="/contato"
              className="border-2 border-white text-white hover:bg-white hover:text-[#084040] px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
            >
              <FaPhoneAlt className="mr-2" /> Falar com Consultor
            </Link>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}