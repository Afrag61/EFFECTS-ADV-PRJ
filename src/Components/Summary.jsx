import quizComplete from "./../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0])
  const incorrectAnswers = userAnswers.filter((answer, index) => answer !== QUESTIONS[index].answers[0])

  const skippedAnswersShare = (skippedAnswers.length / userAnswers.length) * 100
  const correctAnswersShare = (correctAnswers.length / userAnswers.length) * 100
  const incorrectAnswersShare = 100 - skippedAnswersShare - correctAnswersShare

  return (
    <div id="summary">
      <img src={quizComplete} alt="Trophy icon" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{`${skippedAnswersShare.toFixed(0)}%`}</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{`${correctAnswersShare.toFixed(0)}%`}</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{`${incorrectAnswersShare.toFixed(0)}%`}</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
