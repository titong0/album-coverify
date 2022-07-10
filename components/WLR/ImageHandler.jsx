import React, { useState } from "react";
import Cropper from "../Cropper";

const ImageHandler = ({ setImage }) => {
  const [imageSrc, setImageSrc] = useState("/assets/WLR_DEFAULT.png");

  const updateImg = (e) => {
    if (!e.target.files[0]) return;
    const img = URL.createObjectURL(e.target.files[0]);
    setImage(img);
    setImageSrc(img);
  };

  return (
    <div className="flex flex-col gap-3">
      <div>
        <label htmlFor="image">Your image</label>
        <div className="bg-zinc-500 hover:bg-zinc-900 transition text-white w-fit ">
          <input
            className="w-full cursor-pointer"
            name="image"
            type="file"
            accept={"image/*"}
            onChange={updateImg}
          />
        </div>
      </div>
      <p className="bg-gray-200 p-2 w-fit">
        Click and hold the image to crop it
      </p>
      <Cropper
        cropOptions={{ aspect: 650 / 840 }}
        imageSrc={imageSrc}
        setImage={setImage}
        CTAstyle="bg-red-700"
      />
    </div>
  );
};

export default ImageHandler;
