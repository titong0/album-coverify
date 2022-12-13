import { loadAndCacheImage } from "../utils";

const CACHE = [];

export const drawMainImg = async (ctx, src) => {
  ctx.filter = `grayscale(1) contrast(180%)`;
  const img = await loadAndCacheImage(src, CACHE);
  ctx.drawImage(img);
  ctx.filter = `none`;
};

export const drawCredits = (ctx, author) => {};
