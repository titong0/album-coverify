import React from "react";
import { InputProps, stateSetter } from "../../src/types";

type RangeInputProps = InputProps & {
  name?: string;
  label: string | React.ReactNode;
  value: number;
  setValue: (arg0: number) => void;
};
const RangeInput: React.FC<RangeInputProps> = ({
  value,
  setValue,
  name,
  label,
  ...inputProps
}) => {
  return (
    <div className="flex flex-col mt-2">
      <label htmlFor={name || "range"}>{label}</label>
      <input
        name={name || "range"}
        type="range"
        className="sm:w-2/3"
        onChange={(e) => setValue(parseFloat(e.target.value))}
        value={value}
        {...inputProps}
      />
    </div>
  );
};

export default RangeInput;
