import Image, { StaticImageData } from "next/image";
import React from "react";

interface BoardCardProps {
  image: StaticImageData;
  name: string;
  position: string;
}

const BoardCard = ({ image, name, position }: BoardCardProps) => {
  return (
    <div className="bg-pickleball-green-200 flex w-48 flex-col items-center rounded-2xl p-4 text-center shadow-md transition-transform hover:scale-105">
      <div className="mb-3 h-28 w-28 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
      <p className="text-lg font-semibold text-white">{name}</p>
      <p className="text-pickleball-lime-100 text-sm">{position}</p>
    </div>
  );
};

export default BoardCard;
