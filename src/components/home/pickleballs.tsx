import Image from "next/image";
import bgBall from "@/public/bg-ball-1.svg";

const Pickleballs = () => (
  <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
    <Image
      src={bgBall}
      alt="Pickleball"
      className="absolute top-[0%] left-[-35%] rotate-[5deg]"
      priority
    />

    <Image
      src={bgBall}
      alt="Pickleball"
      className="absolute top-[20%] left-[80%] rotate-[5deg]"
      priority
    />

    <Image
      src={bgBall}
      alt="Pickleball"
      className="absolute top-[80%] left-[40%] rotate-[5deg]"
      priority
    />
  </div>
);

export default Pickleballs;
