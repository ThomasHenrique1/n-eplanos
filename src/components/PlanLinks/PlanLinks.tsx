import Link from "next/link";
import { FaUser, FaUsers, FaBuilding, FaHandshake } from "react-icons/fa";

export default function PlanLinks() {
  const plans = [
    {
      title: "Plano Individual",
      description: "Cobertura personalizada para você com acesso aos melhores hospitais e clínicas do país",
      href: "/plano-individual",
      icon: <FaUser className="text-3xl text-[#A1C7D6]" />,
      color: "bg-[#F0F9F9]"
    },
    {
      title: "Plano Familiar",
      description: "Proteção completa para toda sua família com condições especiais e ampla rede credenciada",
      href: "/plano-familiar",
      icon: <FaUsers className="text-3xl text-[#A1C7D6]" />,
      color: "bg-[#F0F9F9]"
    },
    {
      title: "Plano Empresarial",
      description: "Soluções corporativas personalizadas para empresas de todos os portes e segmentos",
      href: "/plano-empresarial",
      icon: <FaBuilding className="text-3xl text-[#A1C7D6]" />,
      color: "bg-[#F0F9F9]"
    },
    {
      title: "Plano por Adesão",
      description: "Condições exclusivas para associados de entidades de classe, sindicatos e conselhos",
      href: "/plano-adesao",
      icon: <FaHandshake className="text-3xl text-[#A1C7D6]" />,
      color: "bg-[#F0F9F9]"
    }
  ];

  return (
    <div className="my-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#084040] mb-2 text-center">
        Nossos Planos de Saúde
      </h2>
      <p className="text-lg text-[#0a4d4d] mb-12 text-center max-w-2xl mx-auto">
        Encontre a cobertura perfeita para suas necessidades
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <Link
            key={index}
            href={plan.href}
            className={`${plan.color} p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E0F2F2] group overflow-hidden relative`}
          >
            {/* Efeito de hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#084040]/10 to-[#0a4d4d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-5">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  {plan.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#084040] mb-3 text-center">
                {plan.title}
              </h3>
              <p className="text-[#0a4d4d] text-center mb-6">
                {plan.description}
              </p>
              
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-[#A1C7D6] text-[#084040] rounded-full text-sm font-semibold group-hover:bg-[#84b4c7] transition-colors">
                  Saiba mais
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}