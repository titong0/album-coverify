import Head from "next/head";
const Credits = () => {
  return (
    <>
      <Head>
        <title>Credits</title>
      </Head>
      <div className="flex justify-center bg-stone-800 min-h-screen">
        <div className="bg-stone-100 sm:p-4 sm:m-2 max-w-2xl p-2">
          <h2 className="font-bold text-lg leading-10 m-2">Credits</h2>
          <p>
            I just wanted to give credits to some internet heroes who helped the
            making of this project indirectly
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <a
                className="text-blue-600"
                href="https://www.youtube.com/c/GameHAX"
              >
                gamehax
              </a>{" "}
              for the blonde font
            </li>
            <li>
              <a
                className="text-blue-600"
                href="https://github.com/DominicTobias/"
              >
                DominicTobias
              </a>{" "}
              for cropping library used, react-easy-crop
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Credits;
