import React, { useState } from "react";
//import './Game.module.css'
import './Game.css'

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];


function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);

  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  }

  return (
    <div className="container">
      <h1>Janken</h1>
      <div className="choices">
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && codeyChoice && (
        <div className="results">
          <div className="choiceSection">
            <span className="emojiSection">{playerChoice.emoji}</span>
            <p className="nameSection">You chose <em>{playerChoice.name}</em></p>
          </div>
          <div className="choice">
            <span className="emoji">{codeyChoice.emoji}</span>
            <p className="name">Computer chose <em>{codeyChoice.name}</em></p>
          </div>
          <h2 className="resultSection">{result}</h2>
          <button className="button" onClick={resetGame}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default Game;
