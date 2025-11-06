import Landing from "@/components/home/landing";
import Paddles from "@/components/home/paddles";
import ReadyToJoin from "@/components/home/readytojoin";
import BluePaddle from "@/components/home/bluepaddles";
const Home = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Landing />
      <div className="absolute top-3 -right-5 -z-10 rotate-[-141deg]">
        <BluePaddle />
      </div>
      <div className="absolute top-88 -left-5 -z-10 rotate-[39deg]">
        <BluePaddle />
      </div>
      <Paddles />
      <ReadyToJoin />
    </div>
  );
};

export default Home;
