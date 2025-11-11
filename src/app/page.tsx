import Landing from "@/components/home/landing";
import Header from "@/components/header";

const Home = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Landing />
      <Header title="JOIN US" />
    </div>
  );
};

export default Home;
