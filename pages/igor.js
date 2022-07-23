import IgorEditor from "../components/IgorEditor";
import Head from "next/head";
import RemoveBgAlert from "../components/General/RemoveBgAlert";
const IGOR = () => {
  return (
    <>
      <Head>
        <title>IGOR generator</title>
      </Head>
      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">IGOR</h2>
        <RemoveBgAlert />
        <IgorEditor />
      </div>
    </>
  );
};

export default IGOR;
