import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const HowItWorksSection = () => {
  // Lista de itens do checklist
  const checklistItems = [
    "CNPJ ativo (incluindo MEI, ME, LTDA e outras categorias), sem exigência mínima de tempo para contratação dependendo da operadora.",
    "As condições para adesão variam conforme a operadora, sendo necessário consultar as regras específicas de cada plano.",
    "Os beneficiários podem incluir sócios, funcionários e, em alguns casos, dependentes, conforme as diretrizes do plano escolhido.",
  ];

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E0F2F2]">
      {/* Descrição */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#084040] mb-4">Funcionamento do Plano Empresarial</h3>
        <p className="text-[#0a4d4d] leading-relaxed">
          O Plano de Saúde Empresarial é uma solução coletiva contratada por empresas para oferecer
          assistência médica de qualidade aos seus colaboradores. Dependendo da operadora, também pode
          incluir dependentes e prestadores de serviço vinculados à empresa.
        </p>
      </div>

      {/* Checklist */}
      <div className="bg-[#EFF9F9] rounded-lg p-6 border border-[#D0E8E8]">
        <h4 className="font-semibold text-[#084040] mb-4 text-lg">Requisitos para Contratação</h4>
        <ul className="space-y-4">
          {checklistItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <FaCheckCircle className="text-[#0a4d4d] text-xl mt-1 mr-3 flex-shrink-0" />
              <span className="text-[#0a4d4d]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowItWorksSection;