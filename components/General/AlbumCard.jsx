import React from "react";
import Link from "next/link";
import Image from "next/image";

const AlbumCard = ({ title, author, href, imageUrl }) => {
  return (
    <Link href={href}>
      <div
        className="flex flex-col max-w-sm rounded-md border border-gray-700 bg-gray-200 transition duration-200
     hover:shadow-lg hover:bg-blue-200 hover:-translate-y-1 cursor-pointer"
      >
        <Image className="rounded-md" src={imageUrl} width="500" height="500" />
        <h3 className="text-l px-2 py-1 font-bold font-sans">{title}</h3>
        <p className="pl-2 pb-1 text-slate-600">{author}</p>
      </div>
    </Link>
  );
};

export default AlbumCard;
