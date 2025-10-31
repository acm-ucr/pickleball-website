import BoardCard from "@/components/board/card";
import bryan_image from "@/public/images/board/Bryan_Nguyen.webp";

const Board = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <BoardCard image={bryan_image} name="Bryan Nguyen" position="President" />
    </div>
  );
};

export default Board;
