export const clearCanvas = (ctx) => {
  ctx.clearRect(0, 0, 1000, 1000);
};

export const fillBg = (ctx, color) => {
  let previousColor = ctx.fillStyle;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1000, 1000);
  ctx.fillStyle = previousColor;
};

export const colorText = (ctx, color, text, x, y, maxWidth, options = {}) => {
  let [prevFillStyle, prevAlign] = [ctx.fillStyle, ctx.textAlign];
  ctx.textAlign = options.textAlign;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y, maxWidth);
  ctx.fillStyle = prevFillStyle;
  ctx.textAlign = prevAlign;
};

export const applyFilter = (image, filter) => {
  filter(image);
};

export const loadAndCacheImage = async (url, cache) => {
  let img = cache.find((img) => img.id === url);
  if (!img) {
    img = new Image();
    img.src = url;
    img.id = url;
    await img.decode();
    cache.push(img);
    return img;
  }
  return img;
};

export const loadFont = async (fontName, fontUrl) => {
  if (typeof FontFace === undefined) return;
  const font = new FontFace(fontName, fontUrl);
  await font.load();
  document.fonts.add(font);
};
