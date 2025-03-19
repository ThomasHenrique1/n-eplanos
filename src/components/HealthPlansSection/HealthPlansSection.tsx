/* eslint-disable @next/next/no-img-element */
interface HealthPlansSectionProps {
  imageUrls: string[];
}

export default function HealthPlansSection({ imageUrls }: HealthPlansSectionProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className="flex justify-center items-center p-3 bg-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105 border border-[#E0E0E0]"
        >
          <img
            src={url}
            alt={`Logo do plano de saúde ${index + 1}`}
            className="w-48 h-48 object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}