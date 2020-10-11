import React from "react";
import "./stats.css";

/** Simply render the score, level and question number */

function Stats(props) {
  const { score, questionNum, numQuestions } = props;
  return (
    <ul className="stats">
      <li className="stats__stat-container">
        <div className="stats__stat-label">Score</div>
        <div id="score" className="stats__stat-value">
          {score}
        </div>
      </li>
      <li className="stats__stat-container">
        <div className="stats__stat-label">Question</div>
        <div id="question-number" className="stats__stat-value">
          {questionNum} / {numQuestions}
        </div>
      </li>
    </ul>
  );
}

export default Stats;
