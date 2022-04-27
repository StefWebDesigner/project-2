import React, { useState } from 'react'
import ExperimentalNav from '../../../navbar/ExperimentalNav';
import { Howl } from "howler";
import './SoundQuiz.css'


function SoundQuiz() {
    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    

    const questions = [
        {
            text: "Play the sound and choose the word.",
            soundSrc: "/audio/Dog.mp3",
            options: [
                {id:0, text: "Green", isCorrect: false},
                {id:1, text: "Cat", isCorrect: false},
                {id:2, text: "Red", isCorrect: false},
                {id:3, text: "Dog", isCorrect: true},
            ],
            answer: "Dog",
        },
        {
            text: "Play the sound and choose the word.",
            soundSrc: "/audio/Cat.mp3",
            options: [
                {id:0, text: "Apple", isCorrect: false},
                {id:1, text: "Airplane", isCorrect: false},
                {id:2, text: "Cat", isCorrect: true},
                {id:3, text: "Yellow", isCorrect: false},
            ],
            answer: "Cat",
        },
        {
            text: "Play the sound and choose the word.",
            soundSrc: "/audio/Green.mp3",
            options: [
                {id:0, text: "Cat", isCorrect: false},
                {id:1, text: "Car", isCorrect: false},
                {id:2, text: "Green", isCorrect: true},
                {id:3, text: "Red", isCorrect: false},
            ],
            answer: "Green",
        },
        {
            text: "Play the sound and choose the word.",
            soundSrc: "/audio/Red.mp3",
            options: [
                {id:0, text: "Airplane", isCorrect: false},
                {id:1, text: "Banana", isCorrect: false},
                {id:2, text: "Dog", isCorrect: false},
                {id:3, text: "Red", isCorrect: true},
            ],
            answer: "Red",
        },
        {
            text: "Play the sound and choose the word.",
            soundSrc: "/audio/Airplane.mp3",
            options: [
                {id:0, text: "Banana", isCorrect: false},
                {id:1, text: "Airplane", isCorrect: true},
                {id:2, text: "Cat", isCorrect: false},
                {id:3, text: "Yellow", isCorrect: false},
            ],
            answer: "Airplane",
        },
        {
            text: "Play the sound and choose the word.",
            soundSrc: "/audio/Car.mp3",
            options: [
                {id:0, text: "Car", isCorrect: true},
                {id:1, text: "Red", isCorrect: false},
                {id:2, text: "Apple", isCorrect: false},
                {id:3, text: "Green", isCorrect: false},
            ],
            answer: "Car",
        },
        {
            text: "Play the sound and choose the word.",
            soundSrc: "/audio/Apple.mp3",
            options: [
                {id:0, text: "Yellow", isCorrect: false},
                {id:1, text: "Apple", isCorrect: true},
                {id:2, text: "Red", isCorrect: false},
                {id:3, text: "Dog", isCorrect: false},
            ],
            answer: "Apple",
        },
        {
            text: "Play the sound and choose the word.",
            soundSrc: "/audio/Banana.mp3",
            options: [
                {id:0, text: "Red", isCorrect: false},
                {id:1, text: "Banana", isCorrect: true},
                {id:2, text: "Car", isCorrect: false},
                {id:3, text: "Airplane", isCorrect: false},
            ],
            answer: "Banana",
        },
        {
            text: "Play the sound and choose the word.",
            soundSrc: "/audio/Yellow.mp3",
            options: [
                {id:0, text: "Green", isCorrect: false},
                {id:1, text: "Cat", isCorrect: false},
                {id:2, text: "Apple", isCorrect: false},
                {id:3, text: "Yellow", isCorrect: true},
            ],
            answer: "Yellow",
        },
    ]



const callSound = (src) => {
    const sound = new Howl({
        src,
        html5: true
    });
    sound.play()
};
   

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
            <button className="sound-quiz-play-btn" onClick={() => callSound(questions[currentQuestion].soundSrc)}>Click to play sound</button>
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