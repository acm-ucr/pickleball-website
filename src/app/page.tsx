import Landing from "@/components/home/landing";
import Header from "@/components/header";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Landing />

      <div className="mt-12">
        <Header title="Join Us" />
      </div>
    </div>
  );
};

export default Home;
