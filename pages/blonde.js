import React from "react";
import CustomHead from "../components/General/Landing/CustomHead";
import BlondeEditor from "../components/BlondeEditor";
import RemoveBgAlert from "../components/General/Landing/RemoveBgAlert";
const Blonde = () => {
  return (
    <>
      <CustomHead name="BLONDE" url="BLONDE" />
      <div className="bg-zinc-300">
        <h2 className="p-12 text-4xl text-center">Blonde</h2>
        <RemoveBgAlert />
        <BlondeEditor />
      </div>
    </>
  );
};

export default Blonde;
