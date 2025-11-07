import Image from "next/image";
import Pickleball1 from "@/public/bg-ball-1.svg";
import Pickleball2 from "@/public/bg-ball-2.svg";

export default function Pickleballs() {
  return (
    <>
      <Image
        src={Pickleball1}
        alt="pickleball 1"
        className="absolute -top-70 -right-50 -z-1 h-auto w-[50vw]"
      />

      <Image
        src={Pickleball2}
        alt="pickleball 2"
        className="absolute -bottom-70 -left-60 -z-1 h-auto w-[50vw]"
      />
    </>
  );
}
