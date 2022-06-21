import Link from "next/link";
import "../index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="w-full bg-teal-300">
        <ul className="flex justify-around">
          <li>
            <Link href="/tlop">TLOP</Link>
          </li>
          <li>
            <Link href="/WLR">WLR</Link>
          </li>
          <li>
            <Link href="/">HOME</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
