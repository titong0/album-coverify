import React, { useEffect, useState } from "react";
import Head from "next/head";
import TlopEditor from "../components/TlopEditor";
const TLOP = () => {
  return (
    <>
      <Head>
        <title>The life of pablo generator</title>
        <meta
          property="og:title"
          content="The life of pablo album cover generator"
        />
        <meta
          property="og:description"
          content="Turn your photos into a cover like the life of pablo"
        />
        <meta
          property="og:url"
          content="https://album-coverify.vercel.app/tlop"
        />
        <meta
          property="og:image"
          content="https://album-coverify.vercel.app/TLOP.png"
        />
      </Head>

      <div>
        <h2 className="p-2 pb-0 text-xl">THE LIFE OF PABLO</h2>
        <TlopEditor />
      </div>
    </>
  );
};

export default TLOP;
