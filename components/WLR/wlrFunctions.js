import * as utils from "../utils";

const CACHED_IMAGES = [];

export const drawTitle = (title, ctx) => {
  const fontSize = 240 - Math.log2(title.length) * 40;
  ctx.textAlign = "center";
  ctx.font = `${fontSize}px Slash`;
  utils.colorText(ctx, "#ffffff", title, 502, 202, 600);
  utils.colorText(ctx, "#ff4444", title, 500, 200, 600);
};

/**
 * @param {string} imageUrl
 * @param {CanvasRenderingContext2D} ctx
 */
export const drawImage = async (imageUrl, ctx, tresholdLimit) => {
  const mainImg = await utils.loadAndCacheImage(imageUrl, CACHED_IMAGES);
  ctx.drawImage(mainImg, 180, 70, 640, 850);
  applyTreshold(tresholdLimit, ctx);
};

const applyTreshold = (limit, ctx) => {
  const d = ctx.getImageData(180, 70, 640, 850);
  // prettier-ignore
  for (var i = 0; i < d.data.length; i += 4) {
    d.data[i] = d.data[i + 1] = d.data[i + 2] = d.data[i + 1] > limit ? 255 : 0;
  }
  ctx.putImageData(d, 180, 70);
};

export const drawText = async (ctx) => {
  ctx.font = "bold 12px Arial";
  ctx.fillText("VOLUME NUMBER ONE", 250, 940);
  ctx.fillText("MAYDAY ISSUE 12 / 25", 530, 940);
  ctx.fillText("OPIUM", 780, 940);

  const parentAdvSticker = await utils.loadAndCacheImage(
    "/assets/parental_advisory.png",
    CACHED_IMAGES
  );
  ctx.drawImage(parentAdvSticker, 10, 940, 100, 50);
};
