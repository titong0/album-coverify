import { Crop } from "react-image-crop";
import {
  BothCoordinates,
  Coordinates,
  Ctx2d,
  Dimensions,
  Entries,
  ImageOptions,
  TextOptions,
} from "./types";

export const loadAndCacheImage = async (
  url: string,
  cache: HTMLImageElement[]
) => {
  let img = cache.find((img) => img.id === url);
  if (!img) {
    img = new Image();
    img.src = url;
    img.id = url;
    try {
      await img.decode();
    } catch (error) {
      throw new Error(error as string);
    }
    cache.push(img);
    return img;
  }
  return img;
};

export const drawTextWithMaxChars = (
  ctx: Ctx2d,
  content: string,
  maxChars: number,
  coordinates: BothCoordinates
) => {
  const wordRegex = new RegExp(`/[\s\S]{1,${maxChars}}(?!\S)/g`);
  const modified = content.replace(wordRegex, "$&\n");
  const lines = modified.split("\n");
  coordinates.x;
  lines.forEach((line, index) => {
    const metrics = ctx.measureText(line);
    const height =
      metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    ctx.fillText(line, coordinates.x, coordinates.y + height * index);
  });
};

export const adjustCoordinates = <T extends Coordinates>(
  coordinates: T,
  dimensions: Dimensions,
  options: ImageOptions
): T => {
  let { x: xCopy, y: yCopy } = coordinates;
  const { height, width } = dimensions;
  if (xCopy) {
    if (options?.justify === "center") {
      xCopy = xCopy - width / 2;
    } else if (options?.justify === "right") {
      xCopy = xCopy - width;
    }
  }
  if (yCopy) {
    if (options?.align === "center") {
      yCopy = yCopy - height / 2;
    } else if (options?.align === "bottom") {
      yCopy = yCopy - height;
    }
  }
  coordinates.x = xCopy;
  coordinates.y = yCopy;
  return coordinates;
};

// scale the image so that it reaches height or width without altering aspect ratio
export const getScaledWidthAndHeight = (
  img: HTMLImageElement,
  intendedWidth: number,
  intendedHeight: number
) => {
  const { naturalWidth, naturalHeight } = img;

  let multiplier = 1;
  if (naturalWidth > naturalHeight) {
    multiplier = intendedWidth / naturalWidth;
  } else {
    multiplier = intendedHeight / naturalHeight;
  }
  return {
    width: naturalWidth * multiplier,
    height: naturalHeight * multiplier,
  };
};

export function getMousePos(canvas: HTMLCanvasElement, evt: MouseEvent) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: Math.floor(
      ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width
    ),
    y: Math.floor(
      ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height
    ),
  };
}

export const asyncBlob = async (element: HTMLCanvasElement) => {
  return new Promise((resolve) => {
    element.toBlob((blob) => {
      if (blob === null) throw new Error("Failed to  turn into blob");
      resolve(blob);
    });
  }) as Promise<Blob>;
};

export const imgFromInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files || !e.target.files[0]) return;
  if (e.target.files[0].size > 2097152) return alert("Image too big!");
  const img = e.target.files[0];
  return URL.createObjectURL(img);
};

export const assignTextOptions = <Opts extends TextOptions>(
  ctx: Ctx2d,
  options?: Opts
) => {
  if (!options || !ctx) return ctx;
  Object.entries(options).forEach(([key, value]: any) => {
    if (key in ctx) {
      (ctx as any)[key] = value;
    }
  });
  return ctx;
};

// original code is from https://github.com/DominicTobias/react-image-crop#example
const TO_RADIANS = Math.PI / 180;
export async function canvasPreview(
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  crop: Crop,
  scale: number = 1,
  rotate: number = 1
) {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("No 2d context");
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  // devicePixelRatio slightly increases sharpness on retina devices
  // at the expense of slightly slower render times and needing to
  // size the image back down if you want to download/upload and be
  // true to the images natural size.
  const pixelRatio = window.devicePixelRatio;
  // const pixelRatio = 1

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = "high";

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  const rotateRads = rotate * TO_RADIANS;
  const centerX = image.naturalWidth / 2;
  const centerY = image.naturalHeight / 2;

  ctx.save();

  // 5) Move the crop origin to the canvas origin (0,0)
  ctx.translate(-cropX, -cropY);
  // 4) Move the origin to the center of the original position
  ctx.translate(centerX, centerY);
  // 3) Rotate around the origin
  ctx.rotate(rotateRads);
  // 2) Scale the image
  ctx.scale(scale, scale);
  // 1) Move the center of the image to the origin (0,0)
  ctx.translate(-centerX, -centerY);
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  );

  ctx.restore();
}
