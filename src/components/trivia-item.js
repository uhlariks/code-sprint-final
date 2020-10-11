import React, { useState } from "react";
import shuffle from "../utils/shuffle";
import he from "he";
import "./trivia-item.css";

/** Display a piece of trvia and notify when the right/wrong answer is selected */

function TriviaItem(props) {
  const { correctAnswer, incorrectAnswers, question, onAnswerSelected } = props;

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledAnswers] = useState(() => {
    return shuffle([correctAnswer, ...incorrectAnswers]);
  });

  const onAnswerClick = (event) => {
    const playerAnswer = event.target.innerHTML;
    setSelectedAnswer(playerAnswer);
    const wasPlayerCorrect = playerAnswer === correctAnswer;
    onAnswerSelected(wasPlayerCorrect);
  };

  return (
    <div className="trivia-item">
      <p className="trivia-item__question">{he.decode(question)}</p>
      <ul className="trivia-item__answers">
        {shuffledAnswers.map((answer) => {
          let buttonClass = "trivia-item__button";
          if (selectedAnswer !== null) {
            if (selectedAnswer === answer) {
              if (selectedAnswer === correctAnswer) {
                buttonClass += " trivia-item__button--correct";
              } else {
                buttonClass += " trivia-item__button--incorrect";
              }
            } else {
              buttonClass += " trivia-item__button--disabled";
            }
          }
          return (
            <li key={answer} className="trivia-item__answer">
              <button onClick={onAnswerClick} className={buttonClass}>
                {he.decode(answer)}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TriviaItem;
