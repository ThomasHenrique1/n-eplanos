import React from "react";

interface SelectFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  className?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  value,
  onChange,
  options,
  required = false,
  className = "",
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full p-3 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#084040] ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;