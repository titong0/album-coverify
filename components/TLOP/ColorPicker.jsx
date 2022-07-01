const ColorPicker = () => {
  return (
    <div className="flex flex-col w-100 p-2 ">
      <label htmlFor="bgColor">Background color</label>
      <input
        name="bgColor"
        className="w-32 h-16 my-1"
        type="color"
        defaultValue="#F78C58"
      />
    </div>
  );
};

export default ColorPicker;
