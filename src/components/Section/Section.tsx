import React from "react";

interface SectionProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="p-6 mb-12">
      {/* Título da Seção */}
      <h2 className="text-3xl font-bold text-[#084040] mb-6">{title}</h2>

      {/* Conteúdo da Seção */}
      <div className="text-[#3A403F] leading-relaxed space-y-4">{children}</div>
    </section>
  );
}