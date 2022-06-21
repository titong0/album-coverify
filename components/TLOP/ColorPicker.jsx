const ColorPicker = ({ bgColor, setBgColor }) => {
  return (
    <div className="flex flex-col w-100 ">
      <label>Background color</label>
      <input
        className="w-32 my-1 bg-orange-300"
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
