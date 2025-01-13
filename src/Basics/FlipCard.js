// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ card, onClick, isFlipped, isMatched, isWrong }) => {
  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''} ${isWrong ? 'wrong' : ''}`} 
      onClick={() => onClick(card)}
    >
      <div className="card-front">
        {card.content}
      </div>
      <div className="card-back"></div>
    </div>
  );
};

export default Card;
