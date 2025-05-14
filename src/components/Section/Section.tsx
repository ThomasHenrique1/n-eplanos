import React from "react";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  titleAlign?: "left" | "center"; // Nova prop
  titleColor?: "dark" | "medium" | "light"; // Opções de cores harmonizadas
}

export default function Section({ 
  title, 
  children, 
  titleAlign = "left", // Default left
  titleColor = "dark" // Default dark
}: SectionProps) {
  
  // Cores harmonizadas com seu projeto
  const colorMap = {
    dark: "text-[#1a3a3a]",    // Verde-escuro sofisticado
    medium: "text-[#2a5a5a]",  // Verde médio equilibrado
    light: "text-[#3a7a7a]"    // Verde-claro suave
  };

  return (
    <section className="p-6 mb-12">
      {title && (
        <h2 
          className={`text-3xl font-bold mb-6 
          ${colorMap[titleColor]}
          ${titleAlign === "center" ? "text-center" : "text-left"}`}
        >
          {title}
        </h2>
      )}
      
      {/* Conteúdo permanece padrão como estava */}
      <div className="text-[#000000] leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}