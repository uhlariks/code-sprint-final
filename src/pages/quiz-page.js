import React from "react";
import { Helmet } from "react-helmet";
import QuizGame from "../components/quiz-game";

/** this page is the quiz on composting and at the end of the quiz will link to the location page */

function QuizPage() {
  return (
    <>
      <Helmet>
        <title>Composting App &ndash; Quiz</title>
      </Helmet>
      <QuizGame />
    </>
  );
}

export default QuizPage;
