import Landing from "@/components/home/landing";
import BluePaddle from "@/components/home/bluepaddles";
const Home = () => {
  return (
    <div className="relative overflow-hidden flex h-screen w-full flex-col items-center justify-center">      <Landing />
      <div className="absolute top-3 -right-5 rotate-[-141deg]">
        <BluePaddle />
      </div>
      <div className="absolute bottom-3 -left-5 rotate-[39deg]">
        <BluePaddle />
      </div>
    </div>
  );
};

export default Home;
