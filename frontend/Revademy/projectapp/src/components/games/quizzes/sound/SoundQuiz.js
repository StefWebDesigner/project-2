import React, { useState } from 'react'
import ExperimentalNav from '../../../navbar/ExperimentalNav';
import './SoundQuiz.css'


function SoundQuiz() {
    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    

    const questions = [
        {
            text: "Play the sound and choose the word.",
            "src": "/img/dog-1.png",
            options: [
                {id:0, text: "Duck", isCorrect: false},
                {id:1, text: "Lion", isCorrect: false},
                {id:2, text: "Cat", isCorrect: false},
                {id:3, text: "Dog", isCorrect: true},
            ],
            answer: "Dog",
        },
        {
            text: "Play the sound and choose the word.",
            "src": "/img/cat-1.png",
            options: [
                {id:0, text: "Elephant", isCorrect: false},
                {id:1, text: "Horse", isCorrect: false},
                {id:2, text: "Cat", isCorrect: true},
                {id:3, text: "Monkey", isCorrect: false},
            ],
            answer: "Cat",
        },
        {
            text: "Play the sound and choose the word.",
            "src": "/img/deer-1.png",
            options: [
                {id:0, text: "Cat", isCorrect: false},
                {id:1, text: "Lion", isCorrect: false},
                {id:2, text: "Deer", isCorrect: true},
                {id:3, text: "Monkey", isCorrect: false},
            ],
            answer: "Deer",
        },
        {
            text: "Play the sound and choose the word.",
            "src": "/img/elephant-1.png",
            options: [
                {id:0, text: "Duck", isCorrect: false},
                {id:1, text: "Deer", isCorrect: false},
                {id:2, text: "Dog", isCorrect: false},
                {id:3, text: "Elephant", isCorrect: true},
            ],
            answer: "Elephant",
        },
        {
            text: "Play the sound and choose the word.",
            "src": "/img/horse-1.png",
            options: [
                {id:0, text: "Giraffe", isCorrect: false},
                {id:1, text: "Horse", isCorrect: true},
                {id:2, text: "Cat", isCorrect: false},
                {id:3, text: "Elephant", isCorrect: false},
            ],
            answer: "Horse",
        },
        {
            text: "Play the sound and choose the word.",
            "src": "/img/giraffe-1.png",
            options: [
                {id:0, text: "Giraffe", isCorrect: true},
                {id:1, text: "Monkey", isCorrect: false},
                {id:2, text: "Duck", isCorrect: false},
                {id:3, text: "Dog", isCorrect: false},
            ],
            answer: "Giraffe",
        },
        {
            text: "Play the sound and choose the word.",
            "src": "/img/lion-1.png",
            options: [
                {id:0, text: "Duck", isCorrect: false},
                {id:1, text: "Lion", isCorrect: true},
                {id:2, text: "Giraffe", isCorrect: false},
                {id:3, text: "Horse", isCorrect: false},
            ],
            answer: "Lion",
        },
        {
            text: "Play the sound and choose the word.",
            "src": "/img/monkey-1.png",
            options: [
                {id:0, text: "Duck", isCorrect: false},
                {id:1, text: "Monkey", isCorrect: true},
                {id:2, text: "Deer", isCorrect: false},
                {id:3, text: "Elephant", isCorrect: false},
            ],
            answer: "Monkey",
        },
        {
            text: "Play the sound and choose the word.",
            "src": "/img/duck-1.png",
            options: [
                {id:0, text: "Cat", isCorrect: false},
                {id:1, text: "Lion", isCorrect: false},
                {id:2, text: "Monkey", isCorrect: false},
                {id:3, text: "Duck", isCorrect: true},
            ],
            answer: "Duck",
        },
    ]

   

const optionClicked = (iscorrect) => {
    if (iscorrect){
        setScore(score + 1);
    }

    if(currentQuestion + 1 < questions.length){
        setCurrentQuestion(currentQuestion + 1);
    } else{
        setFinalResults(true);
    }
    
}

const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
}


  return (
      <>
      <ExperimentalNav/>
    <div className = "sound-quiz fade-in-animation">
        
        <h1>Sound Quiz</h1>
        
        <h2>Current Score: {score}</h2>
        
        {showFinalResults ? (

        
        <div className="final-results">
            <h1>Final Results</h1>
            <h2>
                {score} out of {questions.length} correct!{score>4 ? " 😃": ""}
            </h2>
            <button className="sound-quiz-btn" onClick={() => restartGame()}>Restart Game</button>
            <h3>Answers</h3>
            <ul className='sound-quiz-ul'>
                {questions.map((x,index) =>{
                    return(
                        <li className='sound-quiz-li' key={index}>{index + 1}.{questions[index].answer}</li>
                    ) 
                })}
                
                    
            </ul>
        </div>

        ):(

         
        <div className="question-card">
            <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
            <h3 className="question-text" >{questions[currentQuestion].text}</h3>
            <p>Add sound file here</p>
            <ul className="sound-quiz-ul">
                {questions[currentQuestion].options.map((option) => {
                    return (
                        <li className="sound-quiz-li" onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                    );
                })}
            </ul>
        </div>
        )}
    </div>
    </>
  )
}

export default SoundQuiz