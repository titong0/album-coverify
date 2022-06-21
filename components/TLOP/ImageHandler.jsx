const TLOPImageHandler = ({ firstImage, setFirstImage }) => {
  const changeImg = (e) => {
    const img = e.target.files[0];
    const obj = URL.createObjectURL(img);
    changeOneValue("content", obj);
  };

  const changeOneValue = (key, value) => {
    const copy = { ...firstImage };
    copy[key] = value;
    setFirstImage(copy);
  };

  return (
    <div className="flex flex-col w-100">
      <label>FIRST IMAGE</label>
      <input
        type={"file"}
        accept="image/*"
        className="w-64 p-1 my-1"
        onChange={changeImg}
      />
      <label>
        X POSITION OF IMAGE: <strong> {firstImage.x}</strong>
      </label>
      <input
        className="w-2/3"
        type="range"
        min="50"
        max="650"
        value={firstImage.x}
        onChange={(e) => changeOneValue("x", e.target.value)}
      />
      <label>
        Y POSITION OF IMAGE: <strong> {firstImage.y}</strong>
      </label>
      <input
        type="range"
        min="50"
        max="750"
        value={firstImage.y}
        onChange={(e) => changeOneValue("y", e.target.value)}
      />
    </div>
  );
};

export default TLOPImageHandler;
