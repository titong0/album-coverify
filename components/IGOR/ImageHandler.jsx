import React, { useState } from "react";
import Cropper from "../General/Cropper";

const ImageHandler = ({ image, setImage }) => {
  const [imageSrc, setImageSrc] = useState("/assets/IGOR_DEFAULT.png");

  const changeImg = (e) => {
    if (!e.target.files[0]) return;
    const url = URL.createObjectURL(e.target.files[0]);
    setImageSrc(url);
    setImage(url);
  };

  return (
    <div className="flex flex-col m-2 gap-2">
      <label htmlFor="image">Select your image</label>
      <div className="bg-gray-300">
        <input type="file" accept="image/*" onChange={changeImg} />
      </div>
      <Cropper
        setImage={setImage}
        cropOptions={{ aspect: 1 / 1 }}
        imageSrc={imageSrc}
        CTAstyle="bg-pink-500"
      />
    </div>
  );
};

export default ImageHandler;
