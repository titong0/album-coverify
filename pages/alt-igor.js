import CustomHead from "../components/General/CustomHead";
import RemoveBgAlert from "../components/General/RemoveBgAlert";
import AltIgorEditor from "../components/AltIgorEditor";

const AltIgor = () => {
  return (
    <>
      <CustomHead name="IGOR" />
      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">IGOR</h2>
        <RemoveBgAlert />
        <AltIgorEditor />
      </div>
    </>
  );
};

export default AltIgor;
