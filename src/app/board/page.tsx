import Header from "@/components/header";
import Pickleballs from "@/components/board/pickleballs";

const Pickleball = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Header title="Board" />

      <Pickleballs />
    </div>
  );
};

export default Pickleball;
