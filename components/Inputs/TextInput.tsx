import React, { InputHTMLAttributes, Dispatch, SetStateAction } from "react";
import { stateSetter } from "../../src/types";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  setValue: stateSetter<string>;
  name: string;
  label: string;
  className: string;
};

const TextInput: React.FC<Omit<TextInputProps, "defaultValue">> = ({
  value,
  setValue,
  name,
  label,
  children,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col w-100 p-2">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className={`my-1 p-2 border-b-2 border-black outline-offset-4 transition ${className}`}
        {...props}
      />
    </div>
  );
};

export default TextInput;
