import React from "react";
import AlbumCard from "./AlbumCard";

const ALBUMS_INFO = [
  {
    title: "The Life Of Pablo",
    author: "Kanye West",
    href: "/tlop",
    imageUrl: "TLOP.png",
  },
  {
    title: "Whole Lotta Red",
    author: "Playboi Carti",
    href: "/wlr",
    imageUrl: "WLR.png",
  },
  {
    title: "My beautiful Dark Twisted Fantasy",
    author: "Kanye west",
    href: "/mbdtf",
    imageUrl: "MBDTF.png",
  },
  {
    title: "Blonde",
    author: "Frank Ocean",
    href: "/blonde",
    imageUrl: "BLONDE.png",
  },
  {
    title: "Good kid, m.A.A.d city",
    author: "Kendrick Lamar",
    href: "/gkmc",
    imageUrl: "GKMC.png",
  },
  {
    title: "IGOR",
    author: "Tyler, the creator",
    href: "/igor",
    imageUrl: "IGOR.png",
  },
  {
    title: "IGOR (alt cover)",
    author: "Tyler, the creator",
    href: "/alt-igor",
    imageUrl: "ALT-IGOR.png",
  },
  {
    title: "Straight Outta Compton",
    author: "N.W.A.",
    href: "/soc",
    imageUrl: "SOC.png",
  },
  {
    title: "Wolf",
    author: "Tyler, the creator",
    href: "/wolf",
    imageUrl: "WOLF.png",
  },
  {
    title: "Flower Boy",
    author: "Tyler, the creator",
    href: "/flower-boy",
    imageUrl: "FLOWER-BOY.png",
  },
];

const AlbumCardsDisplay: React.FC = () => {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,minmax(175px,1fr))] gap-4 sm:m-12 justify-center`}
    >
      {ALBUMS_INFO.sort((a, b) => a.author.localeCompare(b.author)).map(
        (ALBUM) => (
          <AlbumCard
            title={ALBUM.title}
            author={ALBUM.author}
            href={`/editors${ALBUM.href}`}
            imageUrl={`/examples/${ALBUM.imageUrl}`}
            key={ALBUM.title}
          />
        )
      )}
    </div>
  );
};

export default AlbumCardsDisplay;
