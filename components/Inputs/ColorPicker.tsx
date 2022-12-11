import { InputProps, stateSetter } from "../../src/types";

type ColorInputProps = InputProps & {
  value: string;
  setValue: stateSetter<string>;
  label: string;
  className?: string;
};
const ColorPicker: React.FC<ColorInputProps> = ({
  label,
  value,
  setValue,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col w-100 p-2">
      <label htmlFor="bgColor">{label}</label>
      <input
        name="bgColor"
        className={`w-32 h-16 my-1 ${className}`}
        type={"color"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default ColorPicker;
