import React from "react";
import Head from "next/head";
import MbdtfEditor from "../components/MbdtfEditor";
const MBDTF = () => {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>My Beautiful Dark Twisted Fantasy album cover generator</title>
        <meta
          name="description"
          content="Turn your photos into a cover like My Beautiful Dark Twisted Fantasy"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://album-coverify.vercel.app/mbdtf/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="My Beautiful Dark Twisted Fantasy cover generator"
        />
        <meta
          property="og:description"
          content="Turn your photos into a cover like My Beautiful Dark Twisted Fantasy"
        />
        <meta
          property="og:image"
          content="https://album-coverify.vercel.app/MBDTF.png"
        />

        {/* <!-- Twitter Meta Tags --> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="album-coverify.vercel.app" />
        <meta
          property="twitter:url"
          content="https://album-coverify.vercel.app/mbdtf/"
        />
        <meta
          name="twitter:title"
          content="My Beautiful Dark Twisted Fantasy album cover generator"
        />
        <meta
          name="twitter:description"
          content="Turn your photos into a cover like My Beautiful Dark Twisted Fantasy"
        />
        <meta
          name="twitter:image"
          content="https://album-coverify.vercel.app/MBDTF.png"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
        <meta
          property="og:image:secure_url"
          content="https://album-coverify.vercel.app/MBDTF.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Custom MBDTF cover" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
      </Head>

      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">
          My Beautiful Dark Twisted Fantasy
        </h2>
        <MbdtfEditor />
      </div>
    </>
  );
};

export default MBDTF;
