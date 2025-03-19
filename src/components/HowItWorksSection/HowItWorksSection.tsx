import React from "react";

const HowItWorksSection = () => {
  // Lista de itens do checklist
  const checklistItems = [
    "CNPJ ativo (incluindo MEI, ME, LTDA e outras categorias), sem exigência mínima de tempo para contratação dependendo da operadora.",
    "As condições para adesão variam conforme a operadora, sendo necessário consultar as regras específicas de cada plano.",
    "Os beneficiários podem incluir sócios, funcionários e, em alguns casos, dependentes, conforme as diretrizes do plano escolhido.",
  ];

  return (
    <div className="text-gray-600 leading-relaxed">
      {/* Descrição */}
      <p className="text-gray-700 leading-relaxed mb-8 text-lg text-justify">
        O Plano de Saúde Empresarial é uma solução coletiva contratada por empresas para oferecer
        assistência médica de qualidade aos seus colaboradores. Dependendo da operadora, também pode
        incluir dependentes e prestadores de serviço vinculados à empresa.
      </p>

      {/* Checklist */}
      <ul className="mt-6 space-y-6">
        {checklistItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#084040] text-2xl mr-3">•</span> {/* Bullet personalizado */}
            <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowItWorksSection;