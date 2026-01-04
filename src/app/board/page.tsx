import Header from "@/components/header";
import Pickleballs from "@/components/board/pickleballs";
import Board from "@/components/board/board";

const BoardPage = () => {
  return (
    <>
      <Pickleballs>
        <Header>Board</Header>
        <Board />
      </Pickleballs>
    </>
  );
};

export default BoardPage;
