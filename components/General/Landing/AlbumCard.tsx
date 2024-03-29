import React from "react";
import Link from "next/link";
import Image from "next/image";

type AlbumCardProps = {
  title: string;
  author: string;
  href: string;
  imageUrl: string;
};
const AlbumCard: React.FC<AlbumCardProps> = ({
  title,
  author,
  href,
  imageUrl,
}) => {
  return (
    <Link href={href} passHref>
      <a
        className="flex flex-col max-w-sm m-1 rounded-md border border-gray-700 bg-gray-200 transition duration-200
     hover:shadow-lg hover:bg-blue-200 hover:-translate-y-1 cursor-pointer"
      >
        <Image
          className="rounded-md"
          src={imageUrl}
          width="500"
          height="500"
          alt={`A custom ${title} cover`}
        />
        <h3 className="text-l px-2 py-1 font-bold font-sans">{title}</h3>
        <p className="pl-2 pb-1 text-slate-600">{author}</p>
      </a>
    </Link>
  );
};

export default AlbumCard;
