import React, { useRef, useEffect, useState } from "react";
import ReactCrop from "react-image-crop";
import { canvasPreview, asyncBlob } from "../utils";

/**
 * @param {{
 * cropOptions? : import("react-image-crop").ReactCropProps,
 * imageSrc: string,
 * setImage?: void,
 * CTAstyle?: string
 *
 * }} param0
 */
const Cropper = ({ imageSrc, setImage, CTAstyle, cropOptions }) => {
  const [crop, setCrop] = useState(null);
  const croppedRef = useRef(null);
  const srcRef = useRef(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const [usefixedAspect, toggleUseFixedAspect] = useState(true);

  if (!usefixedAspect) {
    cropOptions.aspect = null;
  }

  const cancelCrop = (e) => {
    e.preventDefault();
    setCompletedCrop(null);
    setCrop(null);
  };
  const cropImg = async (e) => {
    e.preventDefault();
    if (completedCrop.width === 0) return;
    canvasPreview(srcRef.current, croppedRef.current, completedCrop);
    const blob = await asyncBlob(croppedRef.current);
    await setImage(URL.createObjectURL(blob));
    setCompletedCrop(null);
    setCrop(null);
  };
  return (
    <div className="w-fit flex flex-col items-start">
      <label>
        Use recommended aspect ratio
        <input
          className="ml-2 p-3"
          type="checkbox"
          defaultChecked
          onChange={() => toggleUseFixedAspect(!usefixedAspect)}
        />
      </label>

      <ReactCrop
        {...cropOptions}
        crop={crop}
        onComplete={(c) => setCompletedCrop(c)}
        onChange={(c) => {
          setCrop(c);
        }}
      >
        <img width="200" className="hidden" ref={srcRef} src={imageSrc} />
      </ReactCrop>

      {completedCrop && (
        <div className="flex gap-4 p-2 bg-gray-100">
          <button className="border border-black p-2" onClick={cancelCrop}>
            Cancel
          </button>
          <button
            className={`${CTAstyle} text-white p-2 w-full`}
            onClick={cropImg}
          >
            Crop
          </button>
        </div>
      )}
      <canvas className="hidden" ref={croppedRef}></canvas>
    </div>
  );
};

export default Cropper;
