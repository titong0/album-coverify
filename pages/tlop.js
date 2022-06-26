import React, { useEffect, useState } from "react";
import Head from "next/head";
import TlopEditor from "../components/TlopEditor";
const TLOP = () => {
  return (
    <>
      <Head>
        <title>The life of pablo generator</title>
      </Head>

      <div className="bg-orange-300">
        <h2 className="p-2 pb-0 text-xl">THE LIFE OF PABLO</h2>
        <TlopEditor />
      </div>
    </>
  );
};

export default TLOP;
