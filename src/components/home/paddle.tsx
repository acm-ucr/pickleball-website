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
      className={`relative m-12 flex items-center justify-center ${rotated ? "xl:rotate-180" : ""} ${className}`}
    >
      <Image
        src={whitePaddle}
        alt="white paddle"
        className="text-color-pickleball-lime-100 flex items-center justify-center object-contain"
      />

      {!rotated ? (
        <>
          <div className="text-pickleball-green-100 absolute inset-x-6 inset-y-12 flex justify-center text-center text-2xl leading-relaxed font-bold tracking-wide md:inset-x-20 md:text-4xl lg:inset-x-10 lg:inset-y-16 lg:mt-0 lg:text-4xl xl:inset-x-6">
            {text}
          </div>

          <div className="text-pickleball-green-100 absolute inset-x-2 inset-y-4 mt-24 flex items-center justify-center text-center text-4xl font-bold md:pt-8 md:text-5xl lg:pt-4 lg:text-6xl">
            {number}
          </div>
        </>
      ) : (
        <>
          <div className="text-pickleball-green-100 absolute inset-x-1 inset-y-12 ml-4 flex justify-center pr-4 text-center text-2xl leading-relaxed font-bold tracking-wide md:inset-x-15 md:text-4xl lg:inset-x-6 lg:inset-y-20 lg:mt-0 lg:mb-4 lg:ml-2 lg:text-4xl xl:inset-y-88 xl:mr-6 xl:rotate-180">
            {text}
          </div>
          <div className="text-pickleball-green-100 absolute inset-x-15 inset-y-2 mt-24 ml-4 flex items-center justify-center pr-4 text-center text-4xl font-bold md:pt-8 md:text-5xl lg:text-6xl xl:mr-8 xl:rotate-180">
            {number}
          </div>
        </>
      )}
    </div>
  );
};

export default Paddle;
