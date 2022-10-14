import Head from "next/head";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="flex justify-center bg-stone-800 min-h-screen">
        <div className="bg-stone-100 sm:p-4 sm:m-2 max-w-2xl">
          <h1 className="font-bold text-lg leading-10 m-2">Contact</h1>
          <p className="max-w-2xl m-2">
            If you want any album to be added to this website you can contact me
            and I'll see if I can do it. Please take in mind:
          </p>
          <p className="bg-green-200 p-2 my-1 text-center">
            Whatever distinguishes the album cover should be replicable in a
            <strong> semi-automatic</strong> way.
          </p>
          <p className="m-2">
            You can send me an email at:
            <span className="text-blue-500"> augustoerrecarte@gmail.com</span>
          </p>
          <h1 className="font-bold text-lg leading-10 m-2">About the ads...</h1>
          <p className="m-2">
            Sorry, really. I hate ads just as much as you but I needed to add
            them. This site truly took a lot of time to make. I hope you can
            forgive me.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
