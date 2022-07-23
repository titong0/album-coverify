import { loadAndCacheImage } from "../utils";

const CACHE = [];

export const drawMainImg = async (ctx, src) => {
  ctx.filter = `grayscale(1) contrast(180%)`;
  const img = await loadAndCacheImage(src, CACHE);
  ctx.drawImage(img, 75, 75, 850, 850);
  ctx.filter = `none`;
};

export const drawCredits = (ctx, author) => {
  ctx.font = "18px monospace";
  ctx.textAlign = "center";
  ctx.fillText("ALL SONGS WRITTEN, PRODUCED AND ARRANGED BY", 500, 950);
  ctx.fillText(author, 500, 970);
  ctx.font = "";
};
