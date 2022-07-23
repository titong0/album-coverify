import IgorEditor from "../components/IgorEditor";
import CustomHead from "../components/General/CustomHead";
import RemoveBgAlert from "../components/General/RemoveBgAlert";

const IGOR = () => {
  return (
    <>
      <CustomHead name="IGOR" />
      <div className="bg-zinc-200">
        <RemoveBgAlert />
        <h2 className="p-12 text-4xl text-center">IGOR</h2>
        <IgorEditor />
      </div>
    </>
  );
};

export default IGOR;
