import Header from "@/components/header";
import Pickleballs from "@/components/board/pickleballs";
import Board from "@/components/board/board";

const BoardPage = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-5 overflow-hidden">
      <Header title="Board" />
      <Board />
      <Pickleballs />
    </div>
  );
};

export default BoardPage;
