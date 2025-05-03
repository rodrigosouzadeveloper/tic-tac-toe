import { isWinner } from "../helpers/game-logic";
import Square from "./Square";
import { useBoard } from "../hooks/useBoard";

function Board() {
  const { board, winner, handleSquareClick } = useBoard();

  return (
    <div className="mx-auto grid max-w-[22rem] grid-cols-3 gap-2 sm:max-w-[26rem] sm:gap-4">
      {board.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => handleSquareClick(index)}
          isWinner={isWinner(index, winner, board)}
        />
      ))}
    </div>
  );
}

export default Board;
