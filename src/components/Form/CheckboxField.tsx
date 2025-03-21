import React from "react";

interface CheckboxFieldProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  checked,
  onChange,
  label,
  className = "",
}) => {
  return (
    <label className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  );
};

export default CheckboxField;