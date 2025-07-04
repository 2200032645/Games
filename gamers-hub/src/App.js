import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameSelection from "./components/GameSelection";
import TicTacToe from "./components/TicTacToe";
import SnakeGame from "./components/SnakeGame";
import FlappyBird from "./components/FlappyBird";
import MemoryGame from "./components/MemoryGame";
import RockPaperScissors from "./components/RockPaperScissors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameSelection />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/snake-game" element={<SnakeGame />} />
        <Route path="/flappy-bird" element={<FlappyBird />} />
        <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
      </Routes>
    </Router>
  );
}

export default App;
