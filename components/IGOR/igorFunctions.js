import { loadAndCacheImage, loadFont } from "../utils";

const CACHE = [];

loadFont("IGOR", "url(/IGOR-Bolditalic.ttf)");

export const drawMainImg = async (ctx, src) => {
  ctx.filter = `grayscale(1) contrast(180%)`;
  const img = await loadAndCacheImage(src, CACHE);
  ctx.drawImage(img, 75, 75, 850, 850);
  ctx.filter = `none`;
  return;
};

export const drawCredits = (ctx, author) => {
  ctx.font = "18px monospace";
  ctx.textAlign = "center";
  ctx.fillText("ALL SONGS WRITTEN, PRODUCED AND ARRANGED BY", 500, 950);
  ctx.fillText(author, 500, 970);
  ctx.font = "";
};

export const drawTitle = (ctx, text) => {};
