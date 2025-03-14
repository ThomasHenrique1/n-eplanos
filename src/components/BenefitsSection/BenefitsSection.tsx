// components/BenefitsSection.js
import { FaHandHoldingMedical, FaGlobeAmericas, FaHeadset } from "react-icons/fa";

export default function BenefitsSection() {
  return (
    <section className="w-full max-w-4xl mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center">Por que escolher a n&eassociados?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-4 text-center">
          <FaHandHoldingMedical className="text-4xl text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Planos Acessíveis</h3>
          <p className="text-gray-600">Opções que cabem no seu bolso sem perder qualidade.</p>
        </div>
        <div className="p-4 text-center">
          <FaGlobeAmericas className="text-4xl text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Cobertura Nacional</h3>
          <p className="text-gray-600">Atendimento em todo o Brasil com ampla rede credenciada.</p>
        </div>
        <div className="p-4 text-center">
          <FaHeadset className="text-4xl text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Atendimento 24h</h3>
          <p className="text-gray-600">Suporte especializado sempre que precisar.</p>
        </div>
      </div>
    </section>
  );
}