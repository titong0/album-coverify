const TLOPImageHandler = ({ image, setImage, setImageLoaded }) => {
  const changeImg = (e) => {
    if (!e.target.files[0]) return;
    const img = e.target.files[0];
    const obj = URL.createObjectURL(img);
    changeOneValue("content", obj);
    setImageLoaded(false);
  };

  const changeOneValue = (key, value) => {
    const copy = { ...image };
    copy[key] = value;
    setImage(copy);
  };

  return (
    <div className="flex flex-col w-100 bg-opacity-60 bg-red-500 p-2 mr-2 border-2 border-l-0">
      <label>FIRST IMAGE</label>
      <input
        type={"file"}
        accept="image/*"
        className="w-full p-1 my-1"
        onChange={changeImg}
      />
      <label>
        SIZE: <strong> {image.size}</strong>
      </label>
      <input
        className="w-1/3"
        type="range"
        min="0.5"
        step="0.1"
        max="3"
        value={image.size}
        onChange={(e) => changeOneValue("size", e.target.value)}
      />
      <label>
        X POSITION OF IMAGE: <strong> {image.x}</strong>
      </label>
      <input
        className="w-2/3"
        type="range"
        min="5"
        max="65"
        value={image.x}
        onChange={(e) => changeOneValue("x", e.target.value)}
      />
      <label>
        Y POSITION OF IMAGE: <strong> {image.y}</strong>
      </label>
      <input
        className="w-2/3"
        type="range"
        min="5"
        max="90"
        value={image.y}
        onChange={(e) => changeOneValue("y", e.target.value)}
      />
    </div>
  );
};

export default TLOPImageHandler;
