import React, { useState } from "react";
import Cropper from "../General/Cropper";

const ImageHandler = ({ setImage }) => {
  const [imageSrc, setImageSrc] = useState("/assets/GKMC_DEFAULT.png");

  const updateImg = (e) => {
    if (!e.target.files[0]) return;
    const img = URL.createObjectURL(e.target.files[0]);
    setImage(img);
    setImageSrc(img);
  };

  return (
    <div className="flex flex-col gap-4 mt-2">
      <div>
        <label htmlFor="image">Your image</label>
        <div className="bg-zinc-500 hover:bg-zinc-900 transition text-white w-fit mt-1">
          <input
            className="w-full cursor-pointer"
            name="image"
            type="file"
            accept={"image/*"}
            onChange={updateImg}
          />
        </div>
      </div>
      <Cropper
        cropOptions={{ aspect: 920 / 720 }}
        imageSrc={imageSrc}
        setImage={setImage}
        CTAstyle="bg-green-600 border-black border"
      />
    </div>
  );
};

export default ImageHandler;
