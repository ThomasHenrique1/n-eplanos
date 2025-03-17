// components/ContentContainer.tsx
import React, { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 space-y-16">
      {children}
    </div>
  );
}