import { useRouter } from "next/router";
import Link from "next/link";
import "../index.css";

const NAV_LINKS = [
  { display: "Home", path: "/" },
  { display: "TLOP", path: "/tlop" },
  { display: "WLR", path: "/wlr" },
];

function MyApp({ Component, pageProps }) {
  const Router = useRouter();
  return (
    <>
      <nav className="w-full bg-white py-2 shadow-md z-10 relative">
        <ul className="flex justify-around ">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link href={link.path}>
                <span
                  className={`${
                    link.path === Router.asPath ? "underline" : ""
                  } cursor-pointer hover:underline`}
                >
                  {link.display}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
