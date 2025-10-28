import Image, { StaticImageData } from "next/image";
import React from "react";


interface BoardCardProps {
  image: StaticImageData;
  name: string;
  position: string;
}

const BoardCard = ({ image, name, position }: BoardCardProps) => {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-pickleball-green-200 p-4 shadow-md w-48 text-center hover:scale-105 transition-transform">
      <div className="w-28 h-28 rounded-lg overflow-hidden mb-3">
        <Image
          src={image}
          alt={name}
          className="object-cover w-full h-full"
          placeholder="blur"
        />
      </div>
      <p className="text-white font-semibold text-lg">{name}</p>
      <p className="text-pickleball-lime-100 text-sm">{position}</p>
    </div>
  );
};

export default BoardCard;
