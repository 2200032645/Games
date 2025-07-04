import React, { useState } from "react";
import "./tick.css";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="game-container">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
            disabled={cell !== null}
          >
            {cell}
          </button>
        ))}
      </div>
      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;
