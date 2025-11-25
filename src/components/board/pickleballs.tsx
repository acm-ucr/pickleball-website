import Image from "next/image";
import Pickleball1 from "@/public/bg-ball-1.svg";
import Pickleball2 from "@/public/bg-ball-2.svg";

export default function Pickleballs() {
  return (
    <>
      <div className="absolute top-[-10%] right-[-10%] z-[-1] w-[40vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw]">
        <Image src={Pickleball1} alt="pickleball 1" className="h-auto w-full" />
      </div>

      <div className="absolute bottom-[-10%] left-[-10%] z-[-1] w-[40vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw]">
        <Image src={Pickleball2} alt="pickleball 2" className="h-auto w-full" />
      </div>
    </>
  );
}
