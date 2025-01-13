import React, { useState } from 'react';

const GameDifficulty = () => {
  const [difficulty, setDifficulty] = useState('');
  const [settings, setSettings] = useState(null);

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    // Set settings based on the selected difficulty
    switch (difficulty) {
      case 'easy':
        setSettings({
          timeLimit: '10 minutes',
          numberOfLives: 3,
          enemies: 'Few',
        });
        break;
      case 'medium':
        setSettings({
          timeLimit: '7 minutes',
          numberOfLives: 2,
          enemies: 'Moderate',
        });
        break;
      case 'hard':
        setSettings({
          timeLimit: '5 minutes',
          numberOfLives: 1,
          enemies: 'Many',
        });
        break;
      default:
        setSettings(null);
    }
  };

  return (
    <div>
      <h2>Game Difficulty Settings</h2>
      <div>
        <label>Select Difficulty:</label>
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="">-- Select --</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      {settings && (
        <div>
          <h3>Settings for {difficulty} difficulty:</h3>
          <p>Time Limit: {settings.timeLimit}</p>
          <p>Number of Lives: {settings.numberOfLives}</p>
          <p>Enemies: {settings.enemies}</p>
        </div>
      )}
    </div>
  );
};

export default GameDifficulty;
