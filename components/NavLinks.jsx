import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLinks = ({ NAV_LINKS }) => {
  const Router = useRouter();

  return (
    <ul className="flex justify-around ">
      {NAV_LINKS.map((link) => (
        <li key={link.path}>
          <Link href={link.path}>
            <span
              className={`${
                link.path === Router.pathname ? "underline " : ""
              }cursor-pointer hover:underline`}
            >
              {link.display}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
