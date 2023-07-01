import Cropper from "../General/Cropper";
import React, { useState } from "react";
import { imgFromInputEvent } from "../../src/utils";
import {
  ChangeOneProp,
  Coordinates,
  DetailedImage,
  InputProps,
  RequiredPick,
  stateSetter,
} from "../../src/types";
import { createContext, useContext } from "react";
import RangeInput from "./RangeInput";

type ImageHandlerProps<TImg extends DetailedImage> = {
  name?: string;
  label?: string;
  image: TImg;
  aspect: number;
  setImage: stateSetter<TImg>;
  children?: React.ReactNode;
};

type SubComponents = {
  SizeHandler?: React.FC<SizeHandlerProps>;
  CoordinatesHandler?: React.FC<CoordinatesHandlerProps>;
  OpacityHandler?: React.FC<OpacityHandlerProps>;
};

const ImageValuesCtx = createContext<{
  image: DetailedImage;
  changeOneValue: ChangeOneProp<DetailedImage>;
} | null>(null);

function DetailedImageHandler<T extends DetailedImage>({
  image,
  setImage,
  aspect,
  label,
  name,
  children,
}: ImageHandlerProps<T> & SubComponents) {
  const [imageSrc, setImageSrc] = useState(image.srcUrl);

  const changeImgUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = imgFromInputEvent(e);
    if (!url) return;
    changeOneValue("srcUrl", url);
    setImageSrc(url);
  };

  const changeOneValue: ChangeOneProp<typeof image> = (key, value) => {
    console.log({ ...image });
    const copy = { ...image };
    copy[key] = value;
    setImage(copy);
  };

  return (
    <div className="flex flex-col p-4 my-4 mr-2 bg-gray-200 border border-l-0 border-black w-100">
      <label htmlFor={name || "Image"}>{label || "Your image"}</label>
      <input
        name="image"
        type={"file"}
        accept="image/*"
        className="w-full p-2 my-1 text-white transition bg-gray-700 border border-black cursor-pointer hover:bg-gray-500"
        onChange={changeImgUrl}
      />
      <Cropper
        setImage={(url) => changeOneValue("srcUrl", url)}
        imageSrc={imageSrc}
        cropOptions={{ aspect }}
      />

      <ImageValuesCtx.Provider
        value={{ image: image, changeOneValue: changeOneValue }}
      >
        {children}
      </ImageValuesCtx.Provider>
    </div>
  );
}

type SizeHandlerProps = InputProps & {};
const SizeHandler: React.FC<SizeHandlerProps> = ({ ...props }) => {
  const imageValues = useContext(ImageValuesCtx);
  if (!imageValues) return null;
  const { image, changeOneValue } = imageValues;
  return (
    <>
      <label htmlFor="image">
        Size: <strong> {image.size}</strong>
      </label>
      <input
        className="w-1/3"
        type="range"
        value={image.size}
        onChange={(e) => changeOneValue("size", +e.target.value)}
        {...props}
      />
    </>
  );
};

type CoordinatesHandlerProps = {
  pixelToUnitRatio: number;
  xProps?: InputProps;
  yProps?: InputProps;
};
const CoordinatesHandler: React.FC<CoordinatesHandlerProps> = ({
  pixelToUnitRatio,
  xProps,
  yProps,
}) => {
  const imageValues = useContext(ImageValuesCtx);
  if (!imageValues) return null;
  const { image, changeOneValue } = imageValues;

  const withChangedCoordinate = (
    coordinate: keyof Coordinates,
    newValue: number
  ) => {
    const copy = { ...image };
    if (!copy.coordinates) return copy.coordinates;
    copy.coordinates[coordinate] = newValue;
    return copy.coordinates;
  };
  return (
    <>
      {image.coordinates?.x !== undefined && (
        <RangeInput
          label={
            <>
              X position:
              <strong> {image.coordinates.x / pixelToUnitRatio}</strong>
            </>
          }
          value={image.coordinates.x}
          setValue={(value) => {
            changeOneValue("coordinates", withChangedCoordinate("x", value));
          }}
          {...xProps}
        />
      )}
      {image.coordinates?.y !== undefined && (
        <RangeInput
          label={
            <>
              y position:
              <strong> {image.coordinates.y / pixelToUnitRatio}</strong>
            </>
          }
          value={image.coordinates.y}
          setValue={(value) => {
            changeOneValue("coordinates", withChangedCoordinate("y", value));
          }}
          {...yProps}
        />
      )}
    </>
  );
};
type OpacityHandlerProps = {};
const OpacityHandler: React.FC<OpacityHandlerProps> = () => {
  const imageValues = useContext(ImageValuesCtx);
  if (!imageValues) return null;
  const { image, changeOneValue } = imageValues;

  return null;
  // <RangeInput
  //   label="Opacity"
  //   setValue={(num) => changeOneValue("opacity", num)}
  // />
};

DetailedImageHandler.SizeHandler = SizeHandler;
DetailedImageHandler.CoordinatesHandler = CoordinatesHandler;
DetailedImageHandler.OpacityHandler = OpacityHandler;
export default DetailedImageHandler;
