import Landing from "@/components/home/landing";
import Pickleballs from "@/components/home/pickleballs";
import Paddles from "@/components/home/paddles";
import ReadyToJoin from "@/components/home/readytojoin";
import BluePaddle from "@/components/home/bluepaddles";
const Home = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Pickleballs />
      <Landing />
      <div className="absolute top-3 -right-5 -z-10 hidden rotate-[-141deg] md:block">
        <BluePaddle />
      </div>
      <div className="absolute top-88 -left-5 -z-10 hidden rotate-[39deg] md:block">
        <BluePaddle />
      </div>
      <Paddles />
      <ReadyToJoin />
    </div>
  );
};

export default Home;
