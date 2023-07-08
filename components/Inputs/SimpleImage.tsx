import React, { useState } from "react";
import { stateSetter } from "../../src/types";
import { imgFromInputEvent } from "../../src/utils";
import Cropper from "../General/Cropper";
type SimpleImageProps = {
  name?: string;
  label?: string;
  srcUrl: string;
  setSrcUrl: stateSetter<string>;
  aspect: number;
};
const SimpleImage: React.FC<SimpleImageProps> = ({
  name,
  label,
  setSrcUrl,
  srcUrl,
  aspect,
}) => {
  const [UncroppedImage, setUncroppedImage] = useState(srcUrl);

  const changeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = imgFromInputEvent(e);
    if (!url) return;
    setSrcUrl(url);
    setUncroppedImage(url);
  };

  return (
    <div className="flex flex-col p-4 my-4 mr-2 bg-gray-200 border border-l-0 border-black w-100">
      <label className="text-xl leading-10" htmlFor={name}>
        {label}
      </label>
      <input
        name="image"
        type={"file"}
        accept="image/*"
        className="w-full p-2 my-1 text-white transition bg-gray-800 border border-black cursor-pointer hover:bg-gray-500"
        onChange={changeImg}
      />
      <Cropper
        setImage={(url) => setSrcUrl(url)}
        imageSrc={UncroppedImage}
        cropOptions={{ aspect }}
      />
    </div>
  );
};

export default SimpleImage;
