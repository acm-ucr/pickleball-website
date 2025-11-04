import Image from "next/image";
import bgBall from "@/public/bg-ball-1.svg";

export default function Pickleballs() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={bgBall}
        alt=""
        width={1324}
        height={1241}
        className="absolute top-[20px] left-[-693px]"
        style={{ transform: "rotate(5deg)" }}
        priority
      />

      <Image
        src={bgBall}
        alt=""
        width={1324}
        height={1241}
        className="absolute top-[466px] left-[1232px]"
        style={{ transform: "rotate(5deg)" }}
        priority
      />

      <Image
        src={bgBall}
        alt=""
        width={1324}
        height={1241}
        className="absolute top-[2091px] left-[246px]"
        style={{ transform: "rotate(5deg)" }}
        priority
      />
    </div>
  );
}
