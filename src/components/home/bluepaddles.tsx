import Image from "next/image";
import bluePaddle from "@/public/colored-paddle-ball.svg";

const BluePaddle = () => {
  return (
    <Image
      src={bluePaddle}
      alt="Blue pickleball paddle"
      width={150}
      height={150}
    />
  );
};

export default BluePaddle;
