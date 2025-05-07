import Image from "next/image";

interface HealthPlansSectionProps {
  imageUrls: string[];
}

export default function HealthPlansSection({ imageUrls }: HealthPlansSectionProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#E0F2F2] group relative overflow-hidden"
          >
            {/* Efeito de hover sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#084040]/0 to-[#0a4d4d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <Image
              src={url}
              alt={`Logo da operadora ${index + 1}`}
              width={160}
              height={80}
              className="w-full h-auto max-h-30 object-contain grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}