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
  const croppedRef = useRef(null);
  const srcRef = useRef(null);
  const [crop, setCrop] = useState(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const [usefixedAspect, toggleUseFixedAspect] = useState(true);
  const [showCropLabel, setShowCropLabel] = useState(true);

  const aspect = usefixedAspect ? cropOptions.aspect : null;

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
      <label className="flex items-center">
        <span> Use recommended aspect ratio</span>
        <input
          className="ml-2"
          type="checkbox"
          defaultChecked
          onChange={(e) => toggleUseFixedAspect(e.target.checked)}
        />
      </label>
      <div className="mt-2 ">
        <ReactCrop
          aspect={aspect}
          crop={crop}
          className="relative"
          onComplete={(c) => setCompletedCrop(c)}
          onChange={(c) => {
            setCrop(c);
            setShowCropLabel(false);
          }}
        >
          {showCropLabel && (
            <span className="absolute z-10 text-center text-white text-lg w-full mt-4 px-3">
              You can crop your image by clicking here!
            </span>
          )}
          <img
            width="200"
            className={`filter ${
              showCropLabel ? "brightness-20 bg-zinc-800" : ""
            } hidden`}
            ref={srcRef}
            src={imageSrc}
          />
        </ReactCrop>

        {completedCrop && (
          <div className="flex gap-4 py-2 bg-gray-100 w-full ">
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
      </div>
      <canvas className="hidden" ref={croppedRef}></canvas>
    </div>
  );
};

export default Cropper;
