import { ReactNode } from "react";

interface FormFieldWrapperProps {
  children: ReactNode;
  icon: ReactNode;
  label: string;
}

export const FormFieldWrapper = ({ children, icon, label }: FormFieldWrapperProps) => (
  <div className="flex flex-col gap-2">
    <label className="text-[#3A403F] font-medium flex items-center gap-2">
      {icon} {label}
    </label>
    {children}
  </div>
);