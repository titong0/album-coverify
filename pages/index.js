import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const Index = () => {
  return (
    <>
      <Head>
        <title>Album coverify</title>
      </Head>
      <div className="bg-stone-100 h-screen">
        <header className="p-3">
          <h1 className="text-3xl">Easily turn your image into album covers</h1>
          <h3>No photo editing knowledge required</h3>
        </header>
        <div
          className={`grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:m-12 justify-center`}
        >
          <Link href="/tlop">
            <div
              className="flex flex-col max-w-sm border-2 rounded-md bg-amber-50 transition duration-200
             hover:shadow-lg hover:bg-amber-200 hover:-translate-y-1 cursor-pointer"
            >
              <Image
                className="rounded-md"
                src="/TLOP.png"
                width="500"
                height="500"
              />
              <h3 className="text-xl p-2 font-bold font-sans text-center">
                THE LIFE OF PABLO
              </h3>
            </div>
          </Link>
          <Link href="/wlr">
            <div
              className="flex flex-col max-w-sm border-2 rounded-md bg-amber-50 transition duration-200 
             hover:shadow-lg hover:bg-amber-200 hover:-translate-y-1 cursor-pointer"
            >
              <Image
                className="rounded-md"
                src="/WLR.png"
                width="500"
                height="500"
              />
              <h3 className="text-xl p-2 font-bold font-sans text-center">
                Whole Lotta Red
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
