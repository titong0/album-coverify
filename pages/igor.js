import IgorEditor from "../components/IgorEditor";
import Head from "next/head";
import RemoveBgAlert from "../components/General/RemoveBgAlert";
const IGOR = () => {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>IGOR album cover generator</title>
        <meta
          name="description"
          content="Turn your photos into a cover like IGOR"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://album-coverify.vercel.app/igor/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IGOR album cover generator" />
        <meta
          property="og:description"
          content="Turn your photos into a cover like IGOR"
        />
        <meta
          property="og:image"
          content="https://album-coverify.vercel.app/IGOR.png"
        />

        {/* <!-- Twitter Meta Tags --> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="album-coverify.vercel.app" />
        <meta
          property="twitter:url"
          content="https://album-coverify.vercel.app/igor/"
        />
        <meta name="twitter:title" content="IGOR album cover generator" />
        <meta
          name="twitter:description"
          content="Turn your photos into a cover like IGOR"
        />
        <meta
          name="twitter:image"
          content="https://album-coverify.vercel.app/IGOR.png"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
        <meta
          property="og:image:secure_url"
          content="https://album-coverify.vercel.app/IGOR.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Custom IGOR cover" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
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
