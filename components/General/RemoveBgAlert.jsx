import React from "react";

const RemoveBgAlert = () => {
  return (
    <div className="p-3 py-6 bg-black text-gray-300">
      <h3 className="text-xl pb-3">
        This cover requires a background removal to look properly.
      </h3>
      <p>
        You can remove your bg in
        <a href="https://remove.bg" target="_blank">
          {" "}
          <span className="text-amber-300 underline">remove.bg</span>
        </a>
      </p>
    </div>
  );
};

export default RemoveBgAlert;
