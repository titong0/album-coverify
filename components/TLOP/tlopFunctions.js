import { colorText, loadAndCacheImage } from "../utils";

const CACHED_IMAGES = [];

export const drawTitleText = (content, ctx) => {
  for (let i = 1; i < 8; i++) {
    if (i === 7) {
      drawPabloText(content, 100, 70 * (i + 1), ctx);
    } else {
      drawPabloText(content, 100, 70 * i, ctx);
    }
  }
};

const drawPabloText = (text, x, y, ctx) => {
  const separated = text.split(" ");
  const first = [separated[0], separated[1], separated[2]].join(" ");
  const second = separated.splice(3).join(" ");

  ctx.font = "bold 60px Helvetica";
  let secondX = first.length * 54;

  if (text.length > 17) {
    ctx.font = `bold ${1200 / text.length}px Helvetica`;
    secondX = ((first.length * 1200) / text.length) * 0.8;
  }
  ctx.fillText(first, x, y);
  second && ctx.fillText(second, secondX, y);
};

export const drawBelowText = (content, ctx) => {
  for (let i = 0; i < 10; i++) {
    drawWhichOneText(content, 250, 500 + i * 40, ctx);
  }
  for (let i = 0; i < 10; i++) {
    drawWhichOneText(content, 750, 500 + i * 40, ctx);
  }
};

const drawWhichOneText = (content, x, y, ctx) => {
  ctx.font = "bold 30px Helvetica";
  const options = { textAlign: "center" };
  colorText(ctx, "black", content, x, y + 90, 1000, options);
};

export const drawImage = async (image, ctx) => {
  const { content, x, y, size } = image;
  const img = await loadAndCacheImage(content, CACHED_IMAGES);

  const multiplier = (300 / img.naturalWidth) * size;
  ctx.drawImage(
    img,
    x * 10,
    y * 10,
    img.naturalWidth * multiplier,
    img.naturalHeight * multiplier
  );
};
