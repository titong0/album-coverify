import React from "react";
import WolfEditor from "../../components/Editors/WolfEditor";
import CustomHead from "../../components/General/Landing/CustomHead";
import RemoveBgAlert from "../../components/General/Landing/RemoveBgAlert";

const Wolf = () => {
  return (
    <>
      <CustomHead name="Wolf" />
      <div className="bg-zinc-300">
        <h2 className="p-12 text-4xl text-center">Wolf</h2>
        <RemoveBgAlert />
        <WolfEditor />
      </div>
    </>
  );
};

export default Wolf;
