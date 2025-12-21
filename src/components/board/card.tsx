import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  name: string;
  position: string;
}

const BoardCard = ({ image, name, position }: BoardCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={name}
        className="h-full w-[35vw] object-cover sm:w-[15vw]"
      />
      <p className="text-2xl text-white sm:text-4xl">{name}</p>
      <p className="text-pickleball-lime-100 text-xl sm:text-3xl">{position}</p>
    </div>
  );
};

export default BoardCard;
