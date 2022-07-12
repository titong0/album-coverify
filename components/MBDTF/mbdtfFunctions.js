import { loadAndCacheImage } from "../utils";

const CACHED_IMAGES = [];

export const drawBg = async (ctx) => {
  const img = await loadAndCacheImage("/assets/MBDTF_BG.png", CACHED_IMAGES);
  ctx.drawImage(img, 0, 0, 1000, 1000);
  console.log("bg");
};

export const drawMainImg = async (ctx, src, hasBorder) => {
  const img = await loadAndCacheImage(src, CACHED_IMAGES);

  if (hasBorder) {
    return ctx.drawImage(img, 310, 310, 380, 380);
  }
  ctx.drawImage(img, 299, 299, 402, 402);
};
