import React from "react";

const RemoveBgAlert = () => {
  return (
    <div className="p-3 py-6 bg-black text-gray-300">
      <h3 className="text-xl pb-3">
        This cover requires a{" "}
        <span className="text-amber-300">transparent background</span> to look
        properly.
      </h3>
      <p>
        You can remove your background in
        <a href="https://remove.bg" target="_blank">
          {" "}
          <span className="text-amber-300 underline">remove.bg</span> and then
          use this site.
        </a>
      </p>
    </div>
  );
};

export default RemoveBgAlert;
