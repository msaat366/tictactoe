import React, {useState} from "react";
import Board from "./Component/Board";
import { calculateWinner } from "./helpers";
import './Styles/root.scss'

const App = () => {

  const [ board, setboard ] = useState(Array(9).fill(null));
  const [ isXNext, setIsXNext ] = useState(false)

  const winner = calculateWinner(board)

  const message = winner ? `Winner is ${winner}` : `Next Player is ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = (positon) => {

    if (board[ positon ] || winner) {
      return;
    }

    setboard(prev => {
      return prev.map((square, pos) => {
        if (pos === positon) {
          return isXNext ? "X" : 'O';
        }
        return square;
      });
    });
    setIsXNext((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
