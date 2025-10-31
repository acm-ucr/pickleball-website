import Landing from "@/components/home/landing";
import Paddles from "@/components/home/paddles";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Landing />
      <Paddles />
    </div>
  );
};

export default Home;
