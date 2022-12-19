import {
  BothCoordinates,
  Coordinates,
  Ctx2d,
  Dimensions,
} from "../../src/types";
import { loadAndCacheImage } from "../../src/utils";

export const applyPixelation = async (
  ctx: Ctx2d,
  imgSrc: string,
  pixelation: number,
  coordinates: BothCoordinates,
  dimensions: Dimensions,
  CACHE: Array<HTMLImageElement>
) => {
  if (!pixelation) return;
  const miniImageWidth = 33 - pixelation;

  const img = await loadAndCacheImage(imgSrc, CACHE);
  const hiddenCanvas = document.createElement("canvas");
  hiddenCanvas.className = "pixelated";
  hiddenCanvas.width = miniImageWidth;
  hiddenCanvas.height = miniImageWidth;
  const hiddenCtx = hiddenCanvas.getContext("2d")!;

  if ("webkitImageSmoothingEnabled" in ctx)
    ctx.webkitImageSmoothingEnabled = false;
  if ("mozImageSmoothingEnabled" in ctx) ctx.mozImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  hiddenCtx.drawImage(img, 0, 0, miniImageWidth, miniImageWidth);
  ctx.drawImage(
    hiddenCanvas,
    coordinates.x,
    coordinates.y,
    dimensions.width,
    dimensions.height
  );
};
