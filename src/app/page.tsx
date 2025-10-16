import Example from "./Example";
import Header from "../components/header";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Example text1="Adjust" text2="These" text3="Props" />

      <Header title="Weekly Events" />
    </div>
  );
};

export default Home;
