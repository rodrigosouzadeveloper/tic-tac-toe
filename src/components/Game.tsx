import { useBoard } from "../hooks/useBoard";
import Board from "./Board";
import GameStatus from "./GameStatus";
import RestartBox from "./RestartBox";

function Game() {
  const { getGameStatus, handleRestart } = useBoard();

  return (
    <>
      <GameStatus status={getGameStatus()} />

      <Board />

      <RestartBox onRestart={handleRestart} />
    </>
  );
}

export default Game;
