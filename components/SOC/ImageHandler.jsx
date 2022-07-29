import React, { useState } from "react";
import Cropper from "../General/Cropper";
import { imgFromInputEvent } from "../utils";

const ImageHandler = ({ setImage }) => {
  const [imageSrc, setImageSrc] = useState("/assets/SOC_DEFAULT.png");

  const changeImg = (e) => {
    const url = imgFromInputEvent(e);
    setImageSrc(url);
    setImage(url);
  };

  return (
    <div className="flex flex-col m-2 gap-2">
      <label htmlFor="image">Select your image</label>
      <div className="bg-gray-300 transition cursor-pointer hover:bg-gray-400">
        <input type="file" accept="image/*" onChange={changeImg} />
      </div>
      <Cropper
        setImage={setImage}
        cropOptions={{ aspect: 1000 / 700 }}
        imageSrc={imageSrc}
        CTAstyle="bg-red-500"
      />
    </div>
  );
};

export default ImageHandler;
