import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  name: string;
  position: string;
}

const BoardCard = ({ image, name, position }: BoardCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={image} alt={name} className="h-full w-full object-cover" />
      <p className="text-4xl text-white">{name}</p>
      <p className="text-pickleball-lime-100 text-3xl">{position}</p>
    </div>
  );
};

export default BoardCard;
