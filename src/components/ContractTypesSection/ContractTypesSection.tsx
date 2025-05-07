import { FaUser, FaUsers, FaBuilding } from "react-icons/fa";

const ContractTypesSection = () => {
  const plans = [
    {
      title: "Plano de Saúde Individual",
      description: "Cobertura personalizada para quem busca assistência médica de forma independente, com condições variáveis entre operadoras e cláusulas específicas de renovação e cancelamento.",
      icon: <FaUser className="text-4xl" />,
      color: "bg-[#EFF9F9]",
      features: [
        "Contratação pessoa física",
        "Renovação anual",
        "Acomodação personalizada",
        "Rede credenciada ampla"
      ]
    },
    {
      title: "Plano de Saúde Empresarial",
      description: "Solução coletiva ideal para empresas oferecerem assistência médica de qualidade, com condições diferenciadas para grupos.",
      icon: <FaBuilding className="text-4xl" />,
      color: "bg-[#EFF9F9]",
      features: [
        "Para empresas de todos os portes",
        "Condições especiais para grupos",
        "Customização de carências",
        "Gestão administrativa simplificada"
      ]
    },
    {
      title: "Plano de Saúde Familiar",
      description: "Proteção completa para sua família com cobertura ampla e condições especiais para grupos familiares.",
      icon: <FaUsers className="text-4xl" />,
      color: "bg-[#EFF9F9]",
      features: [
        "Cobertura para toda a família",
        "Economia com adesão conjunta",
        "Dependentes com condições especiais",
        "Atendimento pediátrico incluso"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`${plan.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D0E8E8] group relative overflow-hidden`}
          >
            {/* Efeito de hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#084040]/0 to-[#0a4d4d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              {/* Ícone com círculo */}
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-full shadow-sm text-[#0a4d4d]">
                  {plan.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[#084040] text-center">
                {plan.title}
              </h3>
              
              <p className="text-[#0a4d4d] mb-6 leading-relaxed">
                {plan.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#A1C7D6] mr-2">✓</span>
                    <span className="text-[#084040]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractTypesSection;