import { Coordinates, Ctx2d, Dimensions } from "../../src/types";
import { loadAndCacheImage } from "../../src/utils";

// export const drawMainImg = async (ctx, src, hasBorder, pixelation) => {
//   pixelation = parseInt(pixelation);
//   let img = await loadAndCacheImage(src, CACHED_IMAGES);
//   ctx.drawImage(img, ...coords);

//   if (pixelation !== 1) {
//   }
// };

// applyPixelation(ctx, img, 33 - pixelation, coords);
export const applyPixelation = async (
  ctx: Ctx2d,
  imgSrc: string,
  pixelation: number,
  coordinates: Coordinates,
  dimensions: Dimensions,
  CACHE: Array<HTMLImageElement>
) => {
  const img = await loadAndCacheImage(imgSrc, CACHE);
  const hiddenCanvas = document.createElement("canvas");
  hiddenCanvas.className = "pixelated";
  hiddenCanvas.width = pixelation;
  hiddenCanvas.height = pixelation;
  const hiddenCtx = hiddenCanvas.getContext("2d");

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
