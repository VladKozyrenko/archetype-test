import React, { useState } from 'react';
import './TestPage.css';
import { archetypes } from '../../Data/Archetypes/Archetypes';
import { archetypesResult } from '../../Data/ArchetypesResult/ArchetypesResult';
import { questions } from '../../Data/Questions/Questions'

var indexMax;
var maxScore;
var arrayArchetypesScore = [];


function TestPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const setScore = (type, num) => {
        return type.score += num;
    }

    const handleAnswer = (answer) => {
        if (answer === questions[currentQuestion].answers[0]) {
            setScore(questions[currentQuestion].archetype, -2);
        } else if (answer === questions[currentQuestion].answers[1]) {
            setScore(questions[currentQuestion].archetype, -1);
        } else if (answer === questions[currentQuestion].answers[2]) {
            setScore(questions[currentQuestion].archetype, 0);
        } else if (answer === questions[currentQuestion].answers[3]) {
            setScore(questions[currentQuestion].archetype, 1);
        } else if (answer === questions[currentQuestion].answers[4]) {
            setScore(questions[currentQuestion].archetype, 2);
        }
        arrayArchetypesScore = []
        for (var prop in archetypes) {
            arrayArchetypesScore.push(archetypes[prop].score)
        }
        maxScore = Math.max(...arrayArchetypesScore)
        indexMax = arrayArchetypesScore.indexOf(maxScore)
        setCurrentQuestion(currentQuestion + 1);
    }

    return (
        <div>
            {currentQuestion < questions.length ? (
                <div className='x-container'>
                    <h3>Питання №{questions.indexOf(questions[currentQuestion]) + 1}/72</h3>
                    <p id='question-container'>{questions[currentQuestion].question}</p>
                    {questions[currentQuestion].answers.map((answer, index) => (
                        <button id='answer-btn' key={index} onClick={() => handleAnswer(answer)}>
                            {answer}
                        </button>
                    ))}
                    <button id='cmbck' onClick={() => window.location.reload()}>Повернутись на головну сторінку</button>
                </div>
            ) : (
                <div className='z-container'>
                    <div className='answer-div'>
                        <h1 className='cursive'>Ти - {archetypesResult[indexMax].result}</h1>
                        <h2 className='answer-h2'>{archetypesResult[indexMax].character}</h2>
                        <ul className='wish'><span>Бажання:</span> {archetypesResult[indexMax].wish}</ul>
                        <ul className='aim'><span>Ціль:</span> {archetypesResult[indexMax].aim}</ul>
                        <ul className='fear'><span>Страх:</span> {archetypesResult[indexMax].fear}</ul>
                        <ul><span>Стратегія:</span> {archetypesResult[indexMax].strategy}</ul>
                        <ul><span>Слабкість:</span> {archetypesResult[indexMax].weak}</ul>
                        <ul><span>Талант:</span> {archetypesResult[indexMax].talent}</ul>
                    </div>
                    <button id='cmbck' onClick={() => window.location.reload()}>Повернутись на головну сторінку</button>
                </div>
            )
            }
        </div>
    );
}

export default TestPage;