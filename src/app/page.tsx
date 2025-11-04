import Landing from "@/components/home/landing";
import Pickleballs from "@/components/home/pickleballs";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Pickleballs />
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <Landing />
      </div>
    </div>
  );
};

export default Home;
