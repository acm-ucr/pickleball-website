import Landing from "@/components/home/landing";
import Paddles from "@/components/home/paddles";
import ReadyToJoin from "@/components/home/readytojoin";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Landing />
      <Paddles />
      <ReadyToJoin />
    </div>
  );
};

export default Home;
