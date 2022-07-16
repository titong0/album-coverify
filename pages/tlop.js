import React, { useEffect, useState } from "react";
import Head from "next/head";
import TlopEditor from "../components/TlopEditor";
const TLOP = () => {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>The life of pablo album cover generator</title>
        <meta
          name="description"
          content="Turn your photos into a cover like the life of pablo"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://album-coverify.vercel.app/tlop/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The life of pablo album cover generator"
        />
        <meta
          property="og:description"
          content="Turn your photos into a cover like the life of pablo"
        />
        <meta
          property="og:image"
          content="https://album-coverify.vercel.app/TLOP.png"
        />

        {/* <!-- Twitter Meta Tags --> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="album-coverify.vercel.app" />
        <meta
          property="twitter:url"
          content="https://album-coverify.vercel.app/tlop/"
        />
        <meta
          name="twitter:title"
          content="The life of pablo album cover generator"
        />
        <meta
          name="twitter:description"
          content="Turn your photos into a cover like the life of pablo"
        />
        <meta
          name="twitter:image"
          content="https://album-coverify.vercel.app/TLOP.png"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
        <meta
          property="og:image:secure_url"
          content="https://album-coverify.vercel.app/TLOP.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Custom TLOP cover" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
      </Head>

      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">The Life Of Pablo</h2>
        <TlopEditor />
      </div>
    </>
  );
};

export default TLOP;
