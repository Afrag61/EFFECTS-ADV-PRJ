import { useState } from "react";

import QUESTIONS from './../questions.js'
import quizComplete from './../assets/quiz-complete.png'

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = (selectedAnswer) => {
        setUserAnswers(prev => [...prev, selectedAnswer])
    }

    if(quizIsComplete){
        return <div id="summary">
            <img src={quizComplete} alt="Trophy icon" />
            <h2>Quiz Completed</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)

    return (
        <>
            <div id="quiz">
                <div className="question">
                    <h3>{QUESTIONS[activeQuestionIndex].text}</h3>
                    <ul className="answers">
                        {shuffledAnswers.map((answer) =>
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
