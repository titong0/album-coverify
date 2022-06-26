import React from "react";

const ImageHandler = ({ image, setImage, setImageLoaded }) => {
  const changeImg = (e) => {
    if (!e.target.files[0]) return;
    setImageLoaded(false);
    const img = e.target.files[0];
    const obj = URL.createObjectURL(img);
    setImage(obj);
  };
  return (
    <div className="flex flex-col gap-2">
      <label>Your image</label>
      <input type="file" accept={"image/*"} onChange={changeImg} />
      {image !== null && <img width="200" src={image} />}
    </div>
  );
};

export default ImageHandler;
