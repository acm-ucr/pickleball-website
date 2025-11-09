import Image from "next/image";
import whitePaddle from "@/public/white-paddle.svg";

interface PaddleProps {
  text: string;
  number: string;
  className?: string;
  rotated?: boolean;
}

const Paddle = ({ text, number, className, rotated = false }: PaddleProps) => {
  return (
    <div
      className={`relative m-12 flex items-center justify-center ${rotated ? "lg:rotate-180" : ""} ${className}`}
    >
      <Image
        src={whitePaddle}
        alt="white paddle"
        className="text-color-pickleball-lime-100 flex items-center justify-center object-contain"
      />

      {!rotated ? (
        <>
          <div className="text-pickleball-green-100 absolute inset-x-8 inset-y-12 flex justify-center text-center text-2xl leading-relaxed font-bold tracking-wide lg:inset-x-16 lg:inset-y-16 lg:text-4xl">
            {text}
          </div>

          <div className="text-pickleball-green-100 absolute inset-x-2 inset-y-4 mt-24 flex items-center justify-center text-center text-4xl font-bold lg:text-6xl">
            {number}
          </div>
        </>
      ) : (
        <>
          <div className="lg:text-pickleball-green-100 absolute inset-x-5 inset-y-12 ml-4 flex justify-center pr-4 text-center text-2xl leading-relaxed font-bold tracking-wide lg:inset-x-6 lg:inset-y-88 lg:mr-6 lg:mb-4 lg:ml-2 lg:rotate-180 lg:text-4xl">
            {text}
          </div>
          <div className="lg:text-pickleball-green-100 absolute inset-x-15 inset-y-2 mt-24 ml-4 flex items-center justify-center pr-4 text-center text-4xl font-bold lg:mr-8 lg:rotate-180 lg:text-6xl">
            {number}
          </div>
        </>
      )}
    </div>
  );
};

export default Paddle;
