import { colorText, loadAndCacheImage, loadFont } from "../utils";
const CACHE = [];

loadFont("IGOR", `url("/IGOR-Bolditalic.ttf")`);

export const drawMainImg = async (ctx, src) => {
  ctx.filter = `grayscale(1) contrast(180%)`;
  const img = await loadAndCacheImage(src, CACHE);
  ctx.drawImage(img, 260, 194, 510, 510);
  ctx.filter = `none`;
};

export const drawTitle = (ctx, title) => {
  ctx.font = "80px IGOR";
  ctx.textAlign = "center";
  colorText(ctx, "#222", title, 500, 800, 600);
};

export const drawCredits = (ctx, credits) => {
  ctx.font = "23px monospace";
  ctx.textAlign = "center";
  // this line adds \n in the first space every 46 characters
  const modified = credits.replace(/[\s\S]{1,46}(?!\S)/g, "$&\n");
  const lines = modified.split("\n");
  lines.forEach((line, index) => {
    ctx.fillText(line, 500, 850 + 20 * index);
  });
  ctx.font = "";
};
