import Image from "next/image";
import Pickleball1 from "@/public/bg-ball-1.svg";
import Pickleball2 from "@/public/bg-ball-2.svg";

interface PickleballsProps {
  children: React.ReactNode;
}

const Pickleballs = ({ children }: PickleballsProps) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      {children}
      <div className="absolute -top-[10%] right-[-10%] z-20 w-[40vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw]">
        <Image src={Pickleball1} alt="pickleball 1" className="h-auto w-full" />
      </div>

      <div className="absolute bottom-[-10%] left-[-10%] z-[-1] w-[40vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw]">
        <Image src={Pickleball2} alt="pickleball 2" className="h-auto w-full" />
      </div>
    </div>
  );
};

export default Pickleballs;
