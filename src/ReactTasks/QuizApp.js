import React, { useState } from "react";

const QuizApp = () => {
  // Step 1: Define hardcoded questions
  const questions = [
    {
      questionText: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      questionText: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean",
    },
  ];

  // Step 2: Set up state variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question
  const [score, setScore] = useState(0); // Track user score
  const [isQuizFinished, setIsQuizFinished] = useState(false); // Track if quiz is finished

  // Step 3: Handle answer selection
  const handleAnswerOptionClick = (selectedAnswer) => {
    // Check if the selected answer is correct
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question or finish the quiz
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizFinished(true);
    }
  };

  // Step 4: Render the quiz
  return (
    <div className="quiz-container">
      {isQuizFinished ? (
        <div className="score-section">
          <h1>Quiz Finished!</h1>
          <p>
            You scored {score} out of {questions.length}
          </p>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex].questionText}</p>
          <div className="options-section">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
