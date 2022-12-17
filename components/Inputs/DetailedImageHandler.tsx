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
    <div className="flex flex-col w-100 bg-gray-200 p-4 mr-2 my-4 border border-black border-l-0">
      <label htmlFor={name || "Image"}>{label || "Your image"}</label>
      <input
        name="image"
        type={"file"}
        accept="image/*"
        className="w-full p-2 my-1  transition border border-black cursor-pointer bg-gray-700 text-white hover:bg-gray-500"
        onChange={changeImg}
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
        <>
          <label>
            X position:
            <strong> {image.coordinates.x / pixelToUnitRatio}</strong>
          </label>
          <input
            className="w-2/3"
            type="range"
            value={image.coordinates.x / pixelToUnitRatio}
            onChange={(e) =>
              changeOneValue(
                "coordinates",
                withChangedCoordinate("x", +e.target.value)
              )
            }
            {...xProps}
          />
        </>
      )}
      {image.coordinates?.y !== undefined && (
        <>
          <label>
            Y position:{" "}
            <strong> {image.coordinates.y / pixelToUnitRatio}</strong>
          </label>
          <input
            className="w-2/3"
            type="range"
            value={image.coordinates.y / pixelToUnitRatio}
            onChange={(e) =>
              changeOneValue(
                "coordinates",
                withChangedCoordinate("y", +e.target.value)
              )
            }
            {...yProps}
          />
        </>
      )}
    </>
  );
};
type OpacityHandlerProps = {};
const OpacityHandler: React.FC<OpacityHandlerProps> = () => {
  return null;
};

DetailedImageHandler.SizeHandler = SizeHandler;
DetailedImageHandler.CoordinatesHandler = CoordinatesHandler;
DetailedImageHandler.OpacityHandler = OpacityHandler;
export default DetailedImageHandler;
