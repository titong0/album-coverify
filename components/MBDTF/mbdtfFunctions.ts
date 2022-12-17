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
  const img = await loadAndCacheImage(imgSrc, CACHE);
  const hiddenCanvas = document.createElement("canvas");
  hiddenCanvas.className = "pixelated";
  hiddenCanvas.width = pixelation;
  hiddenCanvas.height = pixelation;
  const hiddenCtx = hiddenCanvas.getContext("2d")!;

  if ("webkitImageSmoothingEnabled" in ctx)
    ctx.webkitImageSmoothingEnabled = false;
  if ("mozImageSmoothingEnabled" in ctx) ctx.mozImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  hiddenCtx.drawImage(img, 0, 0, pixelation, pixelation);
  ctx.drawImage(
    hiddenCanvas,
    coordinates.x,
    coordinates.y,
    dimensions.width,
    dimensions.height
  );
};
