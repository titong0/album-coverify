import React from "react";
import CustomHead from "../components/General/CustomHead";
import BlondeEditor from "../components/BlondeEditor";
const Blonde = () => {
  return (
    <>
      <CustomHead name="BLONDE" url="BLONDE" />
      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">Blonde</h2>
        <BlondeEditor />
      </div>
    </>
  );
};

export default Blonde;
