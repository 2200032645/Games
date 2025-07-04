import React, { useState } from "react";
import { motion } from "framer-motion";
import "./MemoryGame.css"; // Import the CSS file

const symbols = ["🍎", "🍌", "🍉", "🍇", "🍊", "🍓"];
const shuffledCards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);

function MemoryGame() {
  const [openedCards, setOpenedCards] = useState([]);
  const [matched, setMatched] = useState([]);

  const handleClick = (index) => {
    if (openedCards.length === 2 || matched.includes(index)) return;

    const newOpenedCards = [...openedCards, index];
    setOpenedCards(newOpenedCards);

    if (newOpenedCards.length === 2) {
      if (shuffledCards[newOpenedCards[0]] === shuffledCards[newOpenedCards[1]]) {
        setMatched([...matched, ...newOpenedCards]);
      }
      setTimeout(() => setOpenedCards([]), 800);
    }
  };

  return (
    <div className="game-container">
      <h1>🍏 Memory Match 🍍</h1>
      <div className="grid-container">
        {shuffledCards.map((symbol, index) => (
          <motion.div
            key={index}
            className={`card ${openedCards.includes(index) || matched.includes(index) ? "flipped" : ""}`}
            onClick={() => handleClick(index)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              initial={{ rotateY: 180 }}
              animate={{ rotateY: openedCards.includes(index) || matched.includes(index) ? 0 : 180 }}
              transition={{ duration: 0.4 }}
            >
              {openedCards.includes(index) || matched.includes(index) ? symbol : "❓"}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MemoryGame;
