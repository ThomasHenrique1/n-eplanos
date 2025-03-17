import Link from "next/link";

export default function PlanLinks() {
  return (
    <div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Link
        href="/plano-individual"
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-[#E0E0E0]"
      >
        <h2 className="text-2xl font-bold text-[#084040] mb-4">
          Plano Individual
        </h2>
        <p className="text-gray-600">
          Saiba mais sobre o Plano Individual
        </p>
      </Link>
      <Link
        href="/plano-familiar"
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-[#E0E0E0]"
      >
        <h2 className="text-2xl font-bold text-[#084040] mb-4">
          Plano Familiar
        </h2>
        <p className="text-gray-600">
          Saiba mais sobre o Plano Familiar
        </p>
      </Link>
      <Link
        href="/plano-empresarial"
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-[#E0E0E0]"
      >
        <h2 className="text-2xl font-bold text-[#084040] mb-4">
          Plano Empresarial
        </h2>
        <p className="text-gray-600">
          Saiba mais sobre o Plano Empresarial
        </p>
      </Link>
      <Link
        href="/plano-adesao"
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-[#E0E0E0]"
      >
        <h2 className="text-2xl font-bold text-[#084040] mb-4">
          Plano por Adesão
        </h2>
        <p className="text-gray-600">
          Saiba mais sobre o Plano por Adesão
        </p>
      </Link>
    </div>
  );
}