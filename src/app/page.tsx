import Landing from "@/components/home/landing";
import Pickleballs from "@/components/home/pickleballs";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Pickleballs />
      <Landing />
    </div>
  );
};

export default Home;
