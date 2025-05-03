import { useContext } from "react";
import { BoardContext, BoardContextType } from "../context/boardContext";

export const useBoard = () => useContext(BoardContext) as BoardContextType;
