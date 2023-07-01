import React, { useState } from "react";
import { DetailedImage } from "../src/types";

function useImage<Timg extends DetailedImage>(initImage: Timg) {
  const [image, setImage] = useState(initImage);
  return [image, setImage] as const;
}

export default useImage;
