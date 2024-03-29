export type Ctx2d = CanvasRenderingContext2D;
export type CanvColor = CanvasFillStrokeStyles["fillStyle"];
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value"
>;
export type stateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
export type Coordinates = { x?: number; y?: number };
export type BothCoordinates = { x: number; y: number };
export type Dimensions = { width: number; height: number };
export type DetailedImage = {
  srcUrl: string;
  coordinates?: Coordinates;
  opacity?: number;
  size?: number;
};
export type ImgBothCordinates = {
  srcUrl: string;
  coordinates: BothCoordinates;
  opacity?: number;
  size?: number;
};

export type TextOptions = {
  fillStyle?: CanvColor;
  font?: `${number}px ${string}` | `${string} ${number}px ${string}`;
  maxWidth?: number;
  textAlign?: CanvasTextAlign;
  maxCharsPerLine?: number;
};
export type ImageOptions = {
  align?: "center" | "bottom";
  justify?: "center" | "right";
};
export type CanvasFilters =
  | "blur"
  | "contrast"
  | "brightness"
  | "grayscale"
  | "invert"
  | "opacity"
  | "saturate"
  | "sepia";
export type ChangeOneProp<ObjType> = <
  T extends keyof ObjType, // <- T points to a key
  R extends ObjType[T] // <- R points to the type of that key
>(
  key: T,
  value: R
) => any;
export type RequiredPick<T, K extends keyof T> = Required<Pick<T, K>>;
export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
