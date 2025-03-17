// components/ContractTypesSection.tsx
import React from "react";

const ContractTypesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-[#E0E0E0]">
        <h3 className="text-2xl font-bold mb-4 text-[#084040]">
          Plano de Saúde Individual
        </h3>
        <p className="text-gray-600 leading-relaxed text-left">
          O Plano de Saúde Individual é uma escolha para quem busca cobertura de saúde de forma independente. As condições do contrato podem variar entre as operadoras, incluindo cláusulas de renovação e cancelamento, com prazos e requisitos específicos para cada caso.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-[#E0E0E0]">
        <h3 className="text-2xl font-bold mb-4 text-[#084040]">
          Plano de Saúde Empresarial
        </h3>
        <p className="text-gray-600 leading-relaxed text-left">
          O Plano de Saúde Empresarial é uma solução coletiva ideal para empresas que desejam oferecer assistência médica de qualidade aos seus colaboradores. Para garantir as melhores condições e benefícios, é essencial contar com a orientação de uma corretora especializada.
        </p>
      </div>

      {/* Card 3 (opcional) */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-[#E0E0E0]">
        <h3 className="text-2xl font-bold mb-4 text-[#084040]">
          Plano de Saúde Familiar
        </h3>
        <p className="text-gray-600 leading-relaxed text-left">
          O Plano de Saúde Familiar oferece proteção completa para você e sua família, garantindo acesso a atendimento médico de qualidade. Conheça nossas opções e escolha a melhor cobertura para quem mais importa.
        </p>
      </div>
    </div>
  );
};

export default ContractTypesSection;