import Image from "next/image";

const BluePaddles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/colored-paddle-ball.svg"
        alt="Blue pickleball paddle"
        width={150}
        height={150}
        className="absolute top-3 -right-5 rotate-[-141deg] opacity-90"
      />

      <Image
        src="/colored-paddle-ball.svg"
        alt="Blue pickleball paddle"
        width={150}
        height={150}
        className="absolute bottom-3 -left-5 rotate-[39deg] opacity-90"
      />
    </div>
  );
};

export default BluePaddles;
