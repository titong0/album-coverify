import React, { useEffect, useState } from "react";
import TlopCanvas from "../components/tlopCanvas";
import Head from "next/head";
const TLOP = () => {
  return (
    <>
      <Head>
        <title>The life of pablo generator</title>
      </Head>

      <div className="bg-orange-300">
        <h2 className="pt-2 text-xl">THE LIFE OF PABLO</h2>
        <TlopCanvas />
      </div>
    </>
  );
};

export default TLOP;
