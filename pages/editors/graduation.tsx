import React from "react";
import CustomHead from "../../components/General/Landing/CustomHead";
import RemoveBgAlert from "../../components/General/Landing/RemoveBgAlert";
import GraduationEditor from "../../components/Editors/GraduationEditor";

const FlowerBoy = () => {
  return (
    <>
      <CustomHead name="Graduation" />
      <div className="bg-zinc-300">
        <h2 className="p-12 text-4xl text-center">Graduation</h2>
        <RemoveBgAlert />
        <GraduationEditor />
      </div>
    </>
  );
};

export default FlowerBoy;
