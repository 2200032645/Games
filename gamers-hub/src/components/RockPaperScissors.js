import React, { useState } from "react";
import "./RockPaperScissors.css"; // Import the CSS file

function RockPaperScissors() {
  const choices = ["Rock", "Paper", "Scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult("It's a Draw!");
    } else if (
      (choice === "Rock" && compChoice === "Scissors") ||
      (choice === "Paper" && compChoice === "Rock") ||
      (choice === "Scissors" && compChoice === "Paper")
    ) {
      setResult("You Win! 🎉");
    } else {
      setResult("You Lose! 😢");
    }
  };

  return (
    <div className="game-container">
      <h1>✊ Rock, 📄 Paper, ✂️ Scissors</h1>
      <div className="choices-container">
        {choices.map((choice) => (
          <button key={choice} className="choice-button" onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && (
        <div className="result-container">
          <p>You chose: <strong>{playerChoice}</strong></p>
          <p>Computer chose: <strong>{computerChoice}</strong></p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default RockPaperScissors;
