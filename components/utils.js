export const clearCanvas = (ctx) => {
  ctx.clearRect(0, 0, 1000, 1000);
};

export const fillBg = (ctx, color) => {
  let previousColor = ctx.fillStyle;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1000, 1000);
  ctx.fillStyle = previousColor;
};

export const imgBg = async (ctx, url, cache) => {
  const img = await loadAndCacheImage(url, cache);
  ctx.drawImage(img, 0, 0, 1000, 1000);
};

export const colorText = (ctx, color, text, x, y, maxWidth, options = {}) => {
  let [prevFillStyle, prevAlign] = [ctx.fillStyle, ctx.textAlign];
  ctx.textAlign = options.textAlign;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y, maxWidth);
  ctx.fillStyle = prevFillStyle;
  ctx.textAlign = prevAlign;
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
  if (typeof FontFace === "undefined") return;
  const font = new FontFace(fontName, fontUrl);
  await font.load();
  document.fonts.add(font);
};

export const asyncBlob = async (element) => {
  return new Promise((resolve) => element.toBlob(resolve));
};

// original code is from https://github.com/DominicTobias/react-image-crop#example
const TO_RADIANS = Math.PI / 180;
export async function canvasPreview(image, canvas, crop, scale, rotate) {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("No 2d context");
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  // devicePixelRatio slightly increases sharpness on retina devices
  // at the expense of slightly slower render times and needing to
  // size the image back down if you want to download/upload and be
  // true to the images natural size.
  const pixelRatio = window.devicePixelRatio;
  // const pixelRatio = 1

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = "high";

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  const rotateRads = rotate * TO_RADIANS;
  const centerX = image.naturalWidth / 2;
  const centerY = image.naturalHeight / 2;

  ctx.save();

  // 5) Move the crop origin to the canvas origin (0,0)
  ctx.translate(-cropX, -cropY);
  // 4) Move the origin to the center of the original position
  ctx.translate(centerX, centerY);
  // 3) Rotate around the origin
  ctx.rotate(rotateRads);
  // 2) Scale the image
  ctx.scale(scale, scale);
  // 1) Move the center of the image to the origin (0,0)
  ctx.translate(-centerX, -centerY);
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  );

  ctx.restore();
}
