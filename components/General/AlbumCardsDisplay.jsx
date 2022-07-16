import AlbumCard from "./AlbumCard";

const ALBUMS_INFO = [
  {
    title: "The Life Of Pablo",
    author: "Kanye West",
    href: "/tlop",
    imageUrl: "/TLOP.png",
  },
  {
    title: "Whole Lotta Red",
    author: "Playboi Carti",
    href: "/wlr",
    imageUrl: "/WLR.png",
  },
  {
    title: "My beautiful Dark Twisted Fantasy",
    author: "Kanye west",
    href: "/mbdtf",
    imageUrl: "/MBDTF.png",
  },
  {
    title: "Blonde",
    author: "Frank Ocean",
    href: "/blonde",
    imageUrl: "/BLONDE.png",
  },
];

const AlbumCardsDisplay = () => {
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:m-12 justify-center`}
    >
      {ALBUMS_INFO.map((ALBUM) => (
        <AlbumCard
          title={ALBUM.title}
          author={ALBUM.author}
          href={ALBUM.href}
          imageUrl={ALBUM.imageUrl}
          key={ALBUM.title}
        />
      ))}
    </div>
  );
};

export default AlbumCardsDisplay;
