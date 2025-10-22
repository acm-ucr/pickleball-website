import Image from "next/image";
import whitePaddle from "@/public/white-paddle.svg";

interface PaddleProps {
  text: string;
  number: number;
  className?: string;
}

const Paddle = ({ text, number, className }: PaddleProps) => {
  return (
    <div className={`m-4 flex items-center justify-center ${className}`}>
      <div className={`relative ${"h-sm w-sm"}`}>
        <Image
          src={whitePaddle}
          alt="white paddle"
          className="text-color-pickleball-lime-100 flex items-center justify-center"
        />
        <div className="text-pickleball-green-100 absolute inset-x-14 inset-y-20 flex justify-center pr-4 text-center text-4xl leading-relaxed font-bold tracking-wide">
          {text}
        </div>
        <div className="text-pickleball-green-100 absolute inset-x-10 inset-y-2 mt-24 flex items-center justify-center pr-4 text-center text-6xl font-bold">
          {number}
        </div>
      </div>
    </div>
  );
};

export default Paddle;
