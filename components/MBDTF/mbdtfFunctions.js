import { imgBg, loadAndCacheImage } from "../utils";

const CACHED_IMAGES = [];

export const drawBg = async (ctx) => {
  return imgBg(ctx, "/assets/MBDTF_BG.png", CACHED_IMAGES);
};

export const drawMainImg = async (ctx, src, hasBorder, pixelation) => {
  pixelation = parseInt(pixelation);
  let img = await loadAndCacheImage(src, CACHED_IMAGES);
  const coords = hasBorder ? [310, 310, 380, 380] : [299, 299, 402, 402];
  ctx.drawImage(img, ...coords);

  if (pixelation !== 1) {
    applyPixelation(ctx, img, 33 - pixelation, coords);
  }
};
const applyPixelation = (ctx, img, pixelation, coords) => {
  const hiddenCanvas = document.createElement("canvas");
  hiddenCanvas.className = "pixelated";
  hiddenCanvas.width = pixelation;
  hiddenCanvas.height = pixelation;
  const hiddenCtx = hiddenCanvas.getContext("2d");

  ctx.webkitImageSmoothingEnabled = false;
  ctx.mozImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  hiddenCtx.drawImage(img, 0, 0, pixelation, pixelation);
  ctx.drawImage(hiddenCanvas, ...coords);
};
