import React from "react";
import CustomHead from "../components/General/CustomHead";
import GkmcEditor from "../components/GkmcEditor";
const Gkmc = () => {
  return (
    <>
      <CustomHead name="Good kid, m.A.A.d city" url="gkmc" />
      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">Good kid, m.A.A.d city</h2>
        <GkmcEditor />
      </div>
    </>
  );
};

export default Gkmc;
