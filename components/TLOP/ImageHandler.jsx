import Cropper from "../Cropper";
import React, { useState } from "react";

const TLOPImageHandler = ({ image, setImage, second }) => {
  const [imageSrc, setImageSrc] = useState(image.srcUrl);

  const changeImg = (e) => {
    if (!e.target.files[0]) return;
    const img = e.target.files[0];
    const obj = URL.createObjectURL(img);
    changeOneValue("srcUrl", obj);
    setImageSrc(obj);
  };

  const changeOneValue = (key, value) => {
    const copy = { ...image };
    copy[key] = value;
    setImage(copy);
  };

  return (
    <div className="flex flex-col w-100 bg-gray-200 p-4 mr-2 my-4 border border-black border-l-0">
      <label>{second ? "Second" : "First"} image</label>
      <input
        name="image"
        type={"file"}
        accept="image/*"
        className="w-full p-2 my-1  transition border border-black cursor-pointer bg-red-500 hover:bg-red-100"
        onChange={changeImg}
      />
      <Cropper
        setImage={(url) => changeOneValue("srcUrl", url)}
        imageSrc={imageSrc}
        CTAstyle="bg-orange-500"
      />
      <label htmlFor="image">
        Size: <strong> {image.size}</strong>
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
        X position: <strong> {image.x}</strong>
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
        Y position: <strong> {image.y}</strong>
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
