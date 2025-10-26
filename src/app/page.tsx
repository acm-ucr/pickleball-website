import Landing from "@/components/home/landing";
import BluePaddles from "@/components/home/bluepaddles";
const Home = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Landing />
      <BluePaddles />
    </div>
  );
};

export default Home;
