import { colorText, loadAndCacheImage, loadFont } from "../utils";
const CACHE = [];

export const drawMainImg = async (ctx, src) => {
  ctx.filter = `grayscale(1) contrast(180%)`;
  const img = await loadAndCacheImage(src, CACHE);
  ctx.drawImage(img, 260, 194, 510, 510);
  ctx.filter = `none`;
};

export const drawCredits = (ctx, credits) => {
  ctx.font = "23px monospace";
  ctx.textAlign = "center";
  // this line adds \n in the first space every 46 characters

  ctx.font = "";
};
