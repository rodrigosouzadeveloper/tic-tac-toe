import { BoardState, Player } from "../types";

export const WINNING_COMBINATIONS: number[][] = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
] as const;

export const checkWinner = (board: BoardState): Player | null => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export const isWinner = (
  index: number,
  winner: Player | null,
  board: BoardState,
): boolean => {
  if (!winner) return false;
  return WINNING_COMBINATIONS.some(
    (combination) =>
      combination.includes(index) &&
      combination.every((i) => board[i] === winner),
  );
};

export const isBoardFull = (board: BoardState): boolean => {
  return !board.includes(null);
};
