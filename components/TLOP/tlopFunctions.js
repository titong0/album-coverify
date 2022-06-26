/**
 *
 * @param {CanvasRenderingContext2D} ctx
 */
export const changeBg = (ctx, bgColor) => {
  ctx.fillStyle = bgColor;
  ctx.rect(0, 0, 1000, 1000);
  ctx.fill();
};

export const clearCanvas = (ctx) => {
  ctx.clearRect(0, 0, 1000, 1000);
};

export const drawTitleText = (ctx, content) => {
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
  ctx.fillStyle = "black";
  let secondX = first.length * 54;

  if (text.length > 17) {
    ctx.font = `bold ${1200 / text.length}px Helvetica`;
    secondX = ((first.length * 1200) / text.length) * 0.8;
  }
  ctx.fillText(first, x, y);
  second && ctx.fillText(second, secondX, y);
};

export const drawBelowText = (ctx, content) => {
  for (let i = 0; i < 10; i++) {
    drawWhichOneText(content, 120, 500 + i * 40, ctx);
  }
  for (let i = 0; i < 10; i++) {
    drawWhichOneText(content, 600, 500 + i * 40, ctx);
  }
};

const drawWhichOneText = (content, x, y, ctx) => {
  ctx.font = "bold 30px Helvetica";
  ctx.fillStyle = "black";
  ctx.fillText(content, x, y + 90);
};

export const drawFirstImage = (image, ctx, setImgLoaded) => {
  const { content, x, y, size } = image;
  const img = new Image();
  img.src = content;

  img.onload = () => {
    setImgLoaded(true);
    const multiplier = (300 / img.naturalWidth) * size;

    ctx.drawImage(
      img,
      x * 10,
      y * 10,
      img.naturalWidth * multiplier,
      img.naturalHeight * multiplier
    );
  };
};
