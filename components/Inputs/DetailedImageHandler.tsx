import Cropper from "../General/Cropper";
import React, { useState } from "react";
import { imgFromInputEvent } from "../../src/utils";
import {
  ChangeOneProp,
  Coordinates,
  DetailedImage,
  stateSetter,
} from "../../src/types";
import { createContext, useContext } from "react";

type ImageHandlerProps = {
  name: string;
  label: string;
  image: DetailedImage;
  setImage: stateSetter<DetailedImage>;
  children: React.ReactNode;
};

type SubComponents = {
  SizeHandler: () => JSX.Element;
  CoordinatesHandler: () => JSX.Element;
  OpacityHandler: () => JSX.Element;
};

const ImageValuesCtx = createContext<{
  image: DetailedImage;
  changeOneValue: (key: any, value: any) => void;
}>(null);

const DetailedImageHandler: React.FC<ImageHandlerProps> & SubComponents = ({
  image,
  setImage,
  label,
  name,
  children,
}) => {
  const [imageSrc, setImageSrc] = useState(image.srcUrl);

  const changeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = imgFromInputEvent(e);
    if (!url) return;
    changeOneValue("srcUrl", url);
    setImageSrc(url);
  };

  const changeOneValue: ChangeOneProp<typeof image> = (key, value) => {
    const copy = { ...image };
    copy[key] = value;
    setImage(copy);
  };

  return (
    <form className="flex flex-col w-100 bg-gray-200 p-4 mr-2 my-4 border border-black border-l-0">
      <label htmlFor={name}>{label}</label>
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
        cropOptions={{ aspect: 3 / 2 }}
        CTAstyle="bg-orange-500"
      />

      <ImageValuesCtx.Provider
        value={{ image: image, changeOneValue: changeOneValue }}
      >
        {children}
      </ImageValuesCtx.Provider>
    </form>
  );
};

DetailedImageHandler.SizeHandler = () => {
  const { image, changeOneValue } = useContext(ImageValuesCtx);
  return (
    <>
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
    </>
  );
};

DetailedImageHandler.CoordinatesHandler = () => {
  const { image, changeOneValue } = useContext(ImageValuesCtx);

  return (
    <>
      <label>
        X position: <strong> {image.coordinates.x}</strong>
      </label>
      <input
        className="w-2/3"
        type="range"
        min="5"
        max="65"
        value={image.coordinates.x}
        onChange={(e) =>
          changeOneValue("coordinates", {
            x: parseInt(e.target.value),
            y: image.coordinates.y,
          })
        }
      />
      <label>
        Y position: <strong> {image.coordinates.y}</strong>
      </label>
      <input
        className="w-2/3"
        type="range"
        min="5"
        max="90"
        value={image.coordinates.y}
        onChange={(e) =>
          changeOneValue("coordinates", {
            x: image.coordinates.x,
            y: parseInt(e.target.value),
          })
        }
      />
    </>
  );
};
DetailedImageHandler.OpacityHandler = () => {
  return null;
};

export default DetailedImageHandler;
