import React from "react";
import Head from "next/head";
import BlondeEditor from "../components/BlondeEditor";
const Blonde = () => {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Blonde album cover generator</title>
        <meta
          name="description"
          content="Turn your photos into a cover like Blonde"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://album-coverify.vercel.app/blonde/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blonde cover generator" />
        <meta
          property="og:description"
          content="Turn your photos into a cover like Blonde"
        />
        <meta
          property="og:image"
          content="https://album-coverify.vercel.app/BLONDE.png"
        />

        {/* <!-- Twitter Meta Tags --> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="album-coverify.vercel.app" />
        <meta
          property="twitter:url"
          content="https://album-coverify.vercel.app/blonde/"
        />
        <meta name="twitter:title" content="Blonde album cover generator" />
        <meta
          name="twitter:description"
          content="Turn your photos into a cover like Blonde"
        />
        <meta
          name="twitter:image"
          content="https://album-coverify.vercel.app/BLONDE.png"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
        <meta
          property="og:image:secure_url"
          content="https://album-coverify.vercel.app/BLONDE.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Custom Blonde cover" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
      </Head>

      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">Blonde</h2>
        <BlondeEditor />
      </div>
    </>
  );
};

export default Blonde;
