const Contact = () => {
  return (
    <div className="flex justify-center bg-stone-800 min-h-screen">
      <div className="bg-stone-100 sm:p-4 sm:m-2 max-w-2xl">
        <h2 className="font-bold text-lg leading-10 m-2">Contact</h2>
        <p className="max-w-2xl m-2 sm:m-0">
          If you want any album to be added to this website you can contact me
          and I'll see if I can do it. Please take in mind:
        </p>
        <p className="bg-green-200 p-1 sm:p-2 my-2 text-center">
          Whatever distinguishes the album cover should be replicable in a
          <strong> semi-automatic</strong> way.
        </p>
        You can send me an email at:
        <span className="text-blue-500"> augustoerrecarte@gmail.com</span>
      </div>
    </div>
  );
};

export default Contact;
