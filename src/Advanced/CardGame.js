// src/components/Game.js
import React, { useState, useEffect } from 'react';
import Board from './Board';
import './Game.css';

const generateCards = () => {
  const contentArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cards = [...contentArray, ...contentArray].map((content, index) => ({
    id: index,
    content,
    isFlipped: false,
    isMatched: false,
    isWrong: false,  // New state to handle wrong pair indication
  }));
  return shuffle(cards);
};

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Game = () => {
  const [cards, setCards] = useState(generateCards());
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

  useEffect(() => {
    if (isGameActive) {
      const timerId = setInterval(() => setTimer(prev => prev + 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [isGameActive]);

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.content === secondCard.content) {
        setCards(prevCards =>
          prevCards.map(card =>
            card.content === firstCard.content ? { ...card, isMatched: true } : card
          )
        );
        resetTurn();
      } else {
        // Indicate wrong pair
        setCards(prevCards =>
          prevCards.map(card =>
            card.id === firstCard.id || card.id === secondCard.id ? { ...card, isWrong: true } : card
          )
        );
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === firstCard.id || card.id === secondCard.id ? { ...card, isFlipped: false, isWrong: false } : card
            )
          );
          resetTurn();
        }, 1000);  // Keep wrong cards visible for 1 second
      }
    }
  }, [firstCard, secondCard]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
    setMoves(prev => prev + 1);
  };

  const handleCardClick = card => {
    if (disabled) return;
    if (card.isFlipped) return;
    card.isFlipped = true;

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
    }

    setCards(prevCards =>
      prevCards.map(c => (c.id === card.id ? { ...c, isFlipped: true } : c))
    );
  };

  const handleRestart = () => {
    setCards(generateCards());
    setFirstCard(null);
    setSecondCard(null);
    setMoves(0);
    setTimer(0);
    setIsGameActive(false);
  };

  const startGame = () => {
    setIsGameActive(true);
  };

  return (
    <div className="game">
      <h1>Memory Card Game</h1>
      <button onClick={startGame} disabled={isGameActive}>Start Game</button>
      <button onClick={handleRestart}>Restart</button>
      <div className="stats">
        <p>Time: {timer} seconds</p>
        <p>Moves: {moves}</p>
      </div>
      <Board cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

export default Game;
