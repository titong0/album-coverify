import {
  BothCoordinates,
  CanvasFilters,
  CanvColor,
  Coordinates,
  Ctx2d,
  DetailedImage,
  Dimensions,
  ImageOptions,
  ImgBothCordinates,
  RequiredPick,
  TextOptions,
} from "./types";
import {
  adjustCoordinates,
  assignTextOptions,
  drawTextWithMaxChars,
  getScaledWidthAndHeight,
  loadAndCacheImage,
} from "./utils";

export class Drawer {
  ctx: Ctx2d;
  IMAGE_CACHE: Array<HTMLImageElement> = [];

  constructor(context: Ctx2d) {
    this.ctx = context;
  }
  colorBg(color: string) {
    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, 1000, 1000);
    this.ctx.restore();
  }

  drawText(text: string, coordinates: BothCoordinates, options?: TextOptions) {
    this.ctx.save();
    this.ctx = assignTextOptions(this.ctx, options);
    if (options?.maxCharsPerLine || -1 > text.length) {
      drawTextWithMaxChars(
        this.ctx,
        text,
        options?.maxCharsPerLine!,
        coordinates
      );
    }
    this.ctx.fillText(text, coordinates.x, coordinates.y, options?.maxWidth);
    this.ctx.restore();
  }
  drawRect(
    coordinates: BothCoordinates,
    dimensions: Dimensions,
    color: CanvColor
  ) {
    this.ctx.save();
    this.ctx.fillStyle = color;
    const { x, y } = coordinates;
    const { height, width } = dimensions;
    this.ctx.fillRect(x, y, width, height);
    this.ctx.restore();
  }
  async drawFixedImage(
    srcUrl: string,
    coordinates: BothCoordinates,
    dimensions: Dimensions,
    options?: ImageOptions
  ) {
    const img = await loadAndCacheImage(srcUrl, this.IMAGE_CACHE);
    const { x, y } = adjustCoordinates(
      coordinates,
      { width: dimensions.width, height: dimensions.height },
      options || {}
    );
    this.ctx.drawImage(img, x, y, dimensions.width, dimensions.height);
  }

  async drawScalableImage(
    image: RequiredPick<ImgBothCordinates, "coordinates" | "size" | "srcUrl">,
    defaultDimensions: Dimensions,
    options?: ImageOptions
  ) {
    const { srcUrl, size } = image;

    const img = await loadAndCacheImage(srcUrl, this.IMAGE_CACHE);

    const adjustedDimensions = getScaledWidthAndHeight(
      img,
      defaultDimensions.width * size,
      defaultDimensions.height * size
    );

    const { x, y } = adjustCoordinates(
      image.coordinates,
      { width: adjustedDimensions.width, height: adjustedDimensions.height },
      options || {}
    );
    this.ctx.drawImage(
      img,
      x,
      y,
      adjustedDimensions.width,
      adjustedDimensions.height
    );
  }

  async imgBg(url: string) {
    const img = await loadAndCacheImage(url, this.IMAGE_CACHE);
    this.ctx.drawImage(img, 0, 0, 1000, 1000);
  }

  async customDraw(customFn: (ctx: Ctx2d) => Promise<any> | void) {
    await customFn(this.ctx);
  }

  private async loadFont(fontName: string, fontUrl: string) {
    if (typeof FontFace === "undefined") return;

    const font = new FontFace(fontName, `url("/fonts/${fontUrl}")`);
    try {
      await font.load();
    } catch (error) {
      throw new Error(error as string);
    }
    document.fonts.add(font);
  }
  private resetFilter() {
    this.ctx.filter = "none";
  }
  private clearCanvas() {
    this.ctx.clearRect(0, 0, 1000, 1000);
  }
  private addFilter(filter: CanvasFilters, intensity: number | string) {
    const filterStr = `${filter}(${intensity})`;
    if (this.ctx.filter === "none") {
      this.ctx.filter = filterStr;
    } else {
      this.ctx.filter += filterStr;
    }
  }
  utils = {
    loadFont: this.loadFont.bind(this),
    resetFilter: this.resetFilter.bind(this),
    clearCanvas: this.clearCanvas.bind(this),
    addFilter: this.addFilter.bind(this),
  };
}
