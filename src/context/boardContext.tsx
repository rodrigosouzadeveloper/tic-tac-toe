import { createContext, useState } from "react";
import { BoardState, Player } from "../types";
import { checkWinner, isBoardFull } from "../helpers/game-logic";

export type BoardContextType = {
  board: BoardState;
  winner: Player | null;
  isDraw: boolean;
  currentPlayer: Player | null;
  handleSquareClick: (index: number) => void;
  handleRestart: () => void;
  getGameStatus: () => string;
};

export const BoardContext = createContext<BoardContextType | null>(null);

interface BoardProviderProps {
  children: React.ReactNode;
}

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const winner = checkWinner(board);
  const isDraw = !winner && isBoardFull(board);
  const currentPlayer = board.filter(Boolean).length % 2 === 0 ? "X" : "O";

  const getGameStatus = () => {
    if (winner) return `Player ${winner} wins!`;
    if (isDraw) return "It's a draw!";
    return `Player ${currentPlayer}'s turn`;
  };

  const handleSquareClick = (index: number) => {
    if (board[index] || winner) return;
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[index] = currentPlayer;
      return newBoard;
    });
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <BoardContext.Provider
      value={{
        board,
        winner,
        isDraw,
        currentPlayer,
        handleSquareClick,
        handleRestart,
        getGameStatus,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
