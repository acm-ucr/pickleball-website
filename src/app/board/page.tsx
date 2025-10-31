import Header from "@/components/header";
import Pickleballs from "../../components/board/pickleballs";

const Board = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Header title="Board" />

      <Pickleballs />
    </div>
  );
};

export default Board;
