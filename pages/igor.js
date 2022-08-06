import IgorEditor from "../components/IgorEditor";
import CustomHead from "../components/General/CustomHead";
import RemoveBgAlert from "../components/General/RemoveBgAlert";

const IGOR = () => {
  return (
    <>
      <CustomHead name="IGOR" />
      <div className="bg-zinc-200">
<<<<<<< HEAD
        <h2 className="p-12 text-4xl text-center">IGOR</h2>
        <RemoveBgAlert />
=======
        <RemoveBgAlert />
        <h1 className="p-12 text-4xl text-center">IGOR</h1>
>>>>>>> 69be6d2ad8964973314201d398496d93accf53e0
        <IgorEditor />
      </div>
    </>
  );
};

export default IGOR;
