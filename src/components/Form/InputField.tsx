import React from "react";

interface InputFieldProps {
  type: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full p-3 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#084040] ${className}`}
    />
  );
};

export default InputField;