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
  checked,
  setValue,
  name,
  label,
  containerClassName,
  ...inputProps
}) => {
  return (
    <div className={"flex items-center w-fit" + containerClassName}>
      <label htmlFor={name || "range"}>{label}</label>
      <input
        name={name || "checkbox"}
        type="checkbox"
        className={"ml-2 "}
        onChange={(e) => setValue(e.target.checked)}
        checked={checked}
        {...inputProps}
      />
    </div>
  );
};

export default CheckBoxInput;
