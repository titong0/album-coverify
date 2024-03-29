import IgorEditor from "../../components/Editors/IgorEditor";
import CustomHead from "../../components/General/Landing/CustomHead";
import RemoveBgAlert from "../../components/General/Landing/RemoveBgAlert";

const IGOR = () => {
  return (
    <>
      <CustomHead name="IGOR" />
      <div className="bg-zinc-300">
        <h2 className="p-12 text-4xl text-center">IGOR</h2>
        <RemoveBgAlert />
        <IgorEditor />
      </div>
    </>
  );
};

export default IGOR;
