import Landing from "@/components/home/landing";
import ReadyToJoin from "@/components/home/readytojoin";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Landing />
      <ReadyToJoin />
    </div>
  );
};

export default Home;
