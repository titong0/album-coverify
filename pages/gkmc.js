import React from "react";
import Head from "next/head";
import GkmcEditor from "../components/GkmcEditor";
const Gkmc = () => {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Good kid m.A.A.d cityalbum cover generator</title>
        <meta
          name="description"
          content="Turn your photos into a cover like Good kid m.A.A.d city"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://album-coverify.vercel.app/gkmc/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Good kid m.A.A.d citycover generator"
        />
        <meta
          property="og:description"
          content="Turn your photos into a cover like Good kid m.A.A.d city"
        />
        <meta
          property="og:image"
          content="https://album-coverify.vercel.app/GKMC.png"
        />

        {/* <!-- Twitter Meta Tags --> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="album-coverify.vercel.app" />
        <meta
          property="twitter:url"
          content="https://album-coverify.vercel.app/gkmc/"
        />
        <meta
          name="twitter:title"
          content="Good kid m.A.A.d cityalbum cover generator"
        />
        <meta
          name="twitter:description"
          content="Turn your photos into a cover like Good kid m.A.A.d city"
        />
        <meta
          name="twitter:image"
          content="https://album-coverify.vercel.app/GKMC.png"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
        <meta
          property="og:image:secure_url"
          content="https://album-coverify.vercel.app/GKMC.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="Custom Good kid m.A.A.d citycover"
        />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
      </Head>

      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">Good kid, m.A.A.d city</h2>
        <GkmcEditor />
      </div>
    </>
  );
};

export default Gkmc;
