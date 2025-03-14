/* eslint-disable @next/next/no-img-element */
// components/HealthPlansSection.js
interface HealthPlansSectionProps {
  imageUrls: string[];
}

export default function HealthPlansSection({ imageUrls }: HealthPlansSectionProps) {
    return (
      <section className="w-full max-w-4xl mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Nossos Planos de Saúde Parceiros</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
          {imageUrls.map((url, index) => (
            <div key={index} className="w-full flex justify-center">
              <img
                src={url}
                alt={`Logo do plano de saúde ${index + 1}`}
                className="w-50 h-50 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }