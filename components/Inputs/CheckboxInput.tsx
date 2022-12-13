import React from "react";
import { InputProps, stateSetter } from "../../src/types";

type CheckboxInputProps = InputProps & {
  name?: string;
  label: string;
  containerClassName?: string;
  checked: boolean;
  setValue: stateSetter<boolean>;
};
const CheckBoxInput: React.FC<CheckboxInputProps> = ({
  value,
  setValue,
  name,
  label,
  containerClassName,
  ...inputProps
}) => {
  return (
    <div className={"flex items-center mt-2 w-fit ml-2 " + containerClassName}>
      <label htmlFor={name || "range"}>{label}</label>
      <input
        name={name || "checkbox"}
        type="checkbox"
        className={"ml-2 "}
        onChange={(e) => setValue(e.target.checked)}
        value={value}
        {...inputProps}
      />
    </div>
  );
};

export default CheckBoxInput;
