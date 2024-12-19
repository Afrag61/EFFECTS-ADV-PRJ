import { useState } from "react";

import QUESTIONS from './../questions.js'

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer = (selectedAnswer) => {
        setUserAnswers(prev => [...prev, selectedAnswer])
    }

    return (
        <>
            <div id="quiz">
                <div className="question">
                    <h3>{QUESTIONS[activeQuestionIndex].text}</h3>
                    <ul className="answers">
                        {QUESTIONS[activeQuestionIndex].answers.map((answer) =>
                            <li key={answer} className="answer">
                                <button onClick={() => handleSelectAnswer(answer)}>
                                    {answer}
                                </button>
                            </li>)}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Quiz;
