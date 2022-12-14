import CustomHead from "../components/General/Landing/CustomHead";
import RemoveBgAlert from "../components/General/Landing/RemoveBgAlert";
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
