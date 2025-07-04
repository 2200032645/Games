import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./GameSelection.css";

const games = [
  { to: "/tic-tac-toe", label: "Tic-Tac-Toe", className: "blue-card" },
  { to: "/snake-game", label: "Snake Game", className: "green-card" },
  { to: "/flappy-bird", label: "Flappy Bird", className: "yellow-card" },
  { to: "/memory-game", label: "Memory Game", className: "purple-card" },
  { to: "/rock-paper-scissors", label: "Rock Paper Scissors", className: "red-card" },
];

function GameSelection() {
  const particles = useMemo(
    () =>
      [...Array(10)].map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 3}s`,
      })),
    []
  );

  return (
    <div className="game-hub">
      <h1 className="game-title">✨ Bhuvanesh Game Hub 🎮</h1>
      <div className="game-grid">
        {games.map((game, index) => (
          <Link key={index} to={game.to} className={`game-card ${game.className}`}>
            {game.label}
          </Link>
        ))}
      </div>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            top: particle.top,
            left: particle.left,
            animationDuration: particle.animationDuration,
          }}
        ></div>
      ))}
    </div>
  );
}

export default GameSelection;
