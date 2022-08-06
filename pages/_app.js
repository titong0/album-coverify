import NavBar from "../components/General/NavBar";
import "../index.css";
import "react-image-crop/dist/ReactCrop.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
