import React, { useState } from "react";
import { stateSetter } from "../../src/types";
import { imgFromInputEvent } from "../../src/utils";
import Cropper from "../General/Cropper";
type SimpleImageProps = {
  name?: string;
  label?: string;
  srcUrl: string;
  setSrcUrl: stateSetter<string>;
};
const SimpleImage: React.FC<SimpleImageProps> = ({
  name,
  label,
  setSrcUrl,
  srcUrl,
}) => {
  const [UncroppedImage, setUncroppedImage] = useState(srcUrl);

  const changeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = imgFromInputEvent(e);
    if (!url) return;
    setSrcUrl(url);
    setUncroppedImage(url);
  };

  return (
    <div className="flex flex-col w-100 bg-gray-200 p-2 mr-2 my-4 border border-black border-l-0">
      <label htmlFor={name}>{label}</label>
      <input
        name="image"
        type={"file"}
        accept="image/*"
        className="w-full p-2 my-1  transition border border-black cursor-pointer bg-red-500 hover:bg-red-100"
        onChange={changeImg}
      />
      <Cropper
        setImage={(url) => setSrcUrl(url)}
        imageSrc={UncroppedImage}
        cropOptions={{ aspect: 3 / 2 }}
      />
    </div>
  );
};

export default SimpleImage;
