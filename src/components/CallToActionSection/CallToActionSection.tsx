// components/CallToActionSection.js
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="w-full max-w-4xl text-center mt-10 p-6 bg-blue-500 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">Pronto para cuidar da sua saúde?</h2>
      <p className="text-lg mt-2">Clique no botão abaixo e faça sua cotação agora mesmo.</p>
      <Link
        href="/formulario"
        className="mt-4 inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        Cotação Gratuita
      </Link>
    </section>
  );
}