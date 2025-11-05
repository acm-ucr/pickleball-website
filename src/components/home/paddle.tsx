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
      className={`relative m-12 flex items-center justify-center ${rotated ? "rotate-180" : ""} ${className}`}
    >
      <Image
        src={whitePaddle}
        alt="white paddle"
        className="text-color-pickleball-lime-100 flex items-center justify-center object-contain"
      />

      {!rotated ? (
        <>
          <div className="text-pickleball-green-100 absolute inset-x-16 inset-y-16 flex justify-center text-center text-4xl leading-relaxed font-bold tracking-wide">
            {text}
          </div>

          <div className="text-pickleball-green-100 absolute inset-x-2 inset-y-4 mt-24 flex items-center justify-center text-center text-6xl font-bold">
            {number}
          </div>
        </>
      ) : (
        <>
          <div className="text-pickleball-green-100 absolute inset-x-10 inset-y-88 mr-6 mb-4 flex rotate-180 justify-center pr-4 text-center text-4xl leading-relaxed font-bold tracking-wide">
            {text}
          </div>
          <div className="text-pickleball-green-100 absolute inset-x-20 inset-y-2 mt-24 mr-4 flex rotate-180 items-center justify-center pr-4 text-center text-6xl font-bold">
            {number}
          </div>
        </>
      )}
    </div>
  );
};

export default Paddle;
