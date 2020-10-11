import React, { useState } from "react";
import "./quiz-game.css";
import { motion, AnimatePresence } from "framer-motion";
import Stats from "./stats";
import TriviaItem from "./trivia-item";
import triviaItems from "../data/trivia-items";

/** Workhorse that keeps track of which trivia item should be loaded and keeps track of the score */

function QuizGame() {
  const [score, setScore] = useState(0);
  const [triviaIndex, setTriviaIndex] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const questionNum = triviaIndex + 1;
  const currentTriviaItem = triviaItems[triviaIndex];
  const { correct_answer, incorrect_answers, question } = currentTriviaItem;

  const onAnswerSelected = (wasPlayerCorrect) => {
    if (triviaItems.length - 1 === triviaIndex) {
      setIsGameFinished(true);
    } else {
      setTriviaIndex(triviaIndex + 1);
    }
    if (wasPlayerCorrect) {
      setScore(score + 1);
    }
  };

  let summaryScreen;
  if (isGameFinished !== false) {
    summaryScreen = (
      <div>
        <h1 className="quiz-game__title">Game Over! You scored {score}/10.</h1>
        <button
          className="play-again__button"
          onClick={() => window.location.reload(false)}
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="quiz-game__title">
        Composting in Chicago &mdash; Quiz Game{" "}
      </h1>
      <Stats
        score={score}
        level={1}
        questionNum={questionNum}
        numQuestions={10}
      />

      {summaryScreen}

      <AnimatePresence exitBeforeEnter={true}>
        {isGameFinished === false && (
          <motion.div
            key={triviaIndex}
            initial={{ opacity: 0, x: 100, transition: { ease: "easeOut" } }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: -100,
              transition: { delay: 0.25, ease: "easeIn" },
            }}
            transition={{ duration: 0.25 }}
          >
            <TriviaItem
              correctAnswer={correct_answer}
              incorrectAnswers={incorrect_answers}
              question={question}
              onAnswerSelected={onAnswerSelected}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default QuizGame;
