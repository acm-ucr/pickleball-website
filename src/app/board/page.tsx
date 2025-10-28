import Header from "@/components/header";
import BoardCard from "@/components/board/card";
import bryan_image from "@/public/images/board/Bryan_Nguyen.webp";

const Board = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-center">
      <Header title="Board" />
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center">
        <BoardCard
          image={bryan_image}
          name="Bryan Nguyen"
          position="President"
        />
      </div>
    </div>
  </div> 
  );
};

export default Board;
