import Image from "next/image";
import Pickleball1 from "@/public/bg-ball-1.svg";
import Pickleball2 from "@/public/bg-ball-2.svg";

export default function Pickleballs() {
  return (
    <>
      <Image
        src={Pickleball1}
        alt="pickleball 1"
        className="absolute -top-10 -right-10 -z-1 h-32 w-32 opacity-90"
      />

      <Image
        src={Pickleball2}
        alt="pickleball 2"
        className="absolute -bottom-10 -left-10 -z-1 h-32 w-32 opacity-90"
      />
    </>
  );
}
