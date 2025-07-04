import React, { useState, useEffect } from 'react';
import './FlappyBird.css';

const FlappyBird = () => {
  const [birdPosition, setBirdPosition] = useState(250);
  const [gravity, setGravity] = useState(2);
  const [isGameOver, setIsGameOver] = useState(false);
  const [pipeHeight, setPipeHeight] = useState(200);
  const [pipeLeft, setPipeLeft] = useState(500);
  const [score, setScore] = useState(0);

  const birdStyle = {
    position: 'absolute',
    top: birdPosition,
    left: 100,
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: '50%',
  };

  const pipeStyle = {
    position: 'absolute',
    top: 0,
    left: pipeLeft,
    width: 50,
    height: pipeHeight,
    backgroundColor: 'green',
  };

  const bottomPipeStyle = {
    position: 'absolute',
    top: pipeHeight + 150,
    left: pipeLeft,
    width: 50,
    height: 500 - pipeHeight - 150,
    backgroundColor: 'green',
  };

  useEffect(() => {
    let timeId;
    if (!isGameOver && birdPosition < 500) {
      timeId = setInterval(() => {
        setBirdPosition((pos) => pos + gravity);
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [birdPosition, isGameOver]);

  useEffect(() => {
    let pipeId;
    if (!isGameOver && pipeLeft >= -50) {
      pipeId = setInterval(() => {
        setPipeLeft((pos) => pos - 5);
      }, 24);
      return () => {
        clearInterval(pipeId);
      };
    } else {
      setPipeLeft(500);
      setPipeHeight(Math.floor(Math.random() * (400 - 100 + 1) + 100));
      setScore((score) => score + 1);
    }
  }, [pipeLeft, isGameOver]);

  useEffect(() => {
    const hasCollidedWithTopPipe =
      birdPosition >= 0 && birdPosition < pipeHeight;
    const hasCollidedWithBottomPipe =
      birdPosition <= 500 && birdPosition >= 500 - (500 - pipeHeight - 150);

    if (
      pipeLeft >= 100 &&
      pipeLeft <= 150 &&
      (hasCollidedWithTopPipe || hasCollidedWithBottomPipe)
    ) {
      setIsGameOver(true);
    }
  }, [birdPosition, pipeHeight, pipeLeft]);

  const handleClick = () => {
    let newBirdPosition = birdPosition - 50;
    if (!isGameOver && newBirdPosition >= 0) {
      setBirdPosition(newBirdPosition);
    }
  };

  return (
    <div onClick={handleClick} style={{ position: 'relative', width: 500, height: 500, backgroundColor: 'skyblue', overflow: 'hidden' }}>
      <div style={birdStyle}></div>
      <div style={pipeStyle}></div>
      <div style={bottomPipeStyle}></div>
      <span style={{ position: 'absolute', top: 20, left: 20, fontSize: 24 }}>
        Score: {score}
      </span>
      {isGameOver && (
        <div
          style={{
            position: 'absolute',
            top: 200,
            left: 150,
            fontSize: 48,
            color: 'red',
          }}
        >
          Game Over
        </div>
      )}
    </div>
  );
};

export default FlappyBird;
