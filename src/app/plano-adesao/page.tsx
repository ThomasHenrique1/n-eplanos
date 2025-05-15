import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "../../components/Section/Section";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import { FaCheckCircle, FaFileAlt, FaPhoneAlt, FaPercentage, FaHospital, FaUserFriends, FaShieldAlt, FaRegCheckCircle, FaFileSignature } from "react-icons/fa";
import Link from "next/link";

export default function PlanoAdesao() {
  const vantagens = [
    {
      title: "Descontos especiais",
      description: "Planos com valores mais acessíveis do que os planos individuais ou familiares convencionais.",
      icon: <FaPercentage className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Rede ampla de atendimento",
      description: "Hospitais, clínicas e médicos renomados à disposição para os beneficiários.",
      icon: <FaHospital className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Facilidade na inclusão de dependentes",
      description: "Você pode incluir cônjuge, filhos e até outros familiares conforme as regras do contrato.",
      icon: <FaUserFriends className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Planos personalizados",
      description: "Opções variadas de cobertura, desde planos ambulatoriais até coberturas completas com internação.",
      icon: <FaShieldAlt className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Regulamentação da ANS",
      description: "Todos os planos seguem as normas da Agência Nacional de Saúde Suplementar (ANS), garantindo segurança e confiabilidade.",
      icon: <FaRegCheckCircle className="text-2xl text-[#0a4d4d]" />
    },
    {
      title: "Facilidade na adesão",
      description: "Processo de contratação simples e rápido, sem burocracia excessiva.",
      icon: <FaFileSignature className="text-2xl text-[#0a4d4d]" />
    },
  ];

  const etapasContratacao = [
    {
      title: "Escolha o plano ideal",
      description: "Compare as opções de planos disponíveis e selecione a cobertura que melhor atende às suas necessidades.",
      step: "1"
    },
    {
      title: "Preencha o formulário",
      description: "Forneça informações básicas para que possamos personalizar o plano para você.",
      step: "2"
    },
    {
      title: "Aguarde o contato",
      description: "Um consultor entrará em contato para apresentar todas as condições e esclarecer dúvidas.",
      step: "3"
    },
    {
      title: "Envie a documentação",
      description: "Envie documentos como RG, CPF, comprovante de vínculo com a categoria e outros conforme exigido.",
      step: "4"
    },
  ];

  return (
    <div className="bg-[#F8FAFA]">
      {/* Hero Section */}
      <HeroSection
        title="Plano de Saúde por Adesão"
        subtitle="Descontos exclusivos para profissionais de diversas categorias"
        description="Condições especiais para associados de entidades de classe, sindicatos e conselhos profissionais"
        image="/logo.jpg"
        ctaText="Solicitar Cotação"
        ctaLink="/formulario?tipo=adesao"
      />

      <ContentContainer>
        {/* Seção 1: O que é */}
        <Section title="O que é o Plano por Adesão?" titleAlign="left" titleColor="dark">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#084040] mb-4 border-l-4 border-[#0a4d4d] pl-4">
                  Vantagens Exclusivas para Profissionais
                </h3>
                <p className="text-[#0a4d4d] mb-4 leading-relaxed">
                  O <strong className="text-[#084040]">Plano de Saúde por Adesão</strong> é uma opção acessível para profissionais vinculados a entidades de classe, sindicatos ou conselhos profissionais, oferecendo condições especiais e tarifas reduzidas.
                </p>
                <p className="text-[#0a4d4d] leading-relaxed">
                  Essa modalidade permite que autônomos e liberais tenham um <strong>custo mais acessível</strong> com cobertura ampla e qualidade, incluindo a possibilidade de adicionar dependentes.
                </p>
              </div>
              <div className="bg-[#EFF9F9] rounded-lg p-6 border border-[#D0E8E8]">
                <h4 className="font-semibold text-[#084040] mb-3 text-lg">Quem pode contratar:</h4>
                <ul className="space-y-2 text-[#0a4d4d]">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#0a4d4d] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Profissionais com vínculo a entidades de classe</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#0a4d4d] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Sindicalizados e associados</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#0a4d4d] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Membros de conselhos profissionais</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#0a4d4d] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Autônomos e liberais com registro</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Seção 2: Vantagens */}
        <Section title="Principais Vantagens" titleAlign="center" titleColor="dark">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Seção 3: Como contratar */}
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
                {['RG', 'CPF', 'Comprovante de Vínculo', 'Comprovante de Residência'].map((doc, i) => (
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
          <h3 className="text-2xl font-bold mb-4">Proteja Sua Saúde e de Sua Família</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite uma cotação personalizada para seu perfil profissional
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/formulario"
              className="bg-white text-[#084040] hover:bg-[#EFF9F9] px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
            >
              <FaFileAlt className="mr-2" /> Solicitar Cotação
            </Link>
            <Link
              href="https://wa.me/5511992320742"
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