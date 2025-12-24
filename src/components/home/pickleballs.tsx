import Image from "next/image";
import bgBall from "@/public/bg-ball-1.svg";

interface PickleballsProps {
  children: React.ReactNode;
}

const Pickleballs = ({ children }: PickleballsProps) => (
  <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={bgBall}
        alt="Pickleball"
        className="absolute top-[0%] left-[-45%] rotate-[5deg] md:top-[0%] md:left-[-35%]"
        priority
      />

      <Image
        src={bgBall}
        alt="Pickleball"
        className="absolute top-[15%] left-[40%] rotate-[5deg] md:top-[20%] md:left-[75%]"
        priority
      />

      <Image
        src={bgBall}
        alt="Pickleball"
        className="absolute top-[55%] left-[-35%] rotate-[5deg] md:top-[75%] md:left-[40%]"
        priority
      />
    </div>
    {children}
  </div>
);

export default Pickleballs;
