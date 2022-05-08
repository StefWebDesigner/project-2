import React, { useState, useEffect } from 'react'
import ExperimentalNav from '../../../navbar/ExperimentalNav';
import './ColorQuiz.css'
import axios from 'axios'
import { Container } from 'react-bootstrap';

function ColorQuiz() {
    const[showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    

    const questions = [
        {
            text: "What color is this text?",
            options: [
                {id:0, text: "Blue", isCorrect: false},
                {id:1, text: "Yellow", isCorrect: false},
                {id:2, text: "Green", isCorrect: false},
                {id:3, text: "Red", isCorrect: true},
            ],
            color: "Red",
        },
        {
            text: "What color is this text?",
            options: [
                {id:0, text: "Blue", isCorrect: true},
                {id:1, text: "Red", isCorrect: false},
                {id:2, text: "Black", isCorrect: false},
                {id:3, text: "Purple", isCorrect: false},
            ],
            color: "Blue",
        },
        {
            text: "What color is this text?",
            options: [
                {id:0, text: "Black", isCorrect: false},
                {id:1, text: "Red", isCorrect: false},
                {id:2, text: "Yellow", isCorrect: true},
                {id:3, text: "Green", isCorrect: false},
            ],
            color: "Yellow",
        },
        {
            text: "What color is this text?",
            options: [
                {id:0, text: "Brown", isCorrect: false},
                {id:1, text: "Purple", isCorrect: false},
                {id:2, text: "Green", isCorrect: true},
                {id:3, text: "Yellow", isCorrect: false},
            ],
            color: "Green",
        },
        {
            text: "What color is this text?",
            options: [
                {id:0, text: "Black", isCorrect: false},
                {id:1, text: "Purple", isCorrect: true},
                {id:2, text: "White", isCorrect: false},
                {id:3, text: "Red", isCorrect: false},
            ],
            color: "Purple",
        },
        {
            text: "What color is this text?",
            options: [
                {id:0, text: "Orange", isCorrect: true},
                {id:1, text: "White", isCorrect: false},
                {id:2, text: "Blue", isCorrect: false},
                {id:3, text: "Black", isCorrect: false},
            ],
            color: "Orange",
        },
        {
            text: "What color is this text?",
            options: [
                {id:0, text: "Green", isCorrect: false},
                {id:1, text: "White", isCorrect: false},
                {id:2, text: "Blue", isCorrect: false},
                {id:3, text: "Black", isCorrect: true},
            ],
            color: "Black",
        },
        {
            text: "What color is this text?",
            options: [
                {id:0, text: "Blue", isCorrect: false},
                {id:1, text: "White", isCorrect: true},
                {id:2, text: "Orange", isCorrect: false},
                {id:3, text: "Black", isCorrect: false},
            ],
            color: "White",
        },
        {
            text: "What color is this text?",
            options: [
                {id:0, text: "Purple", isCorrect: false},
                {id:1, text: "Red", isCorrect: false},
                {id:2, text: "Brown", isCorrect: true},
                {id:3, text: "Yellow", isCorrect: false},
            ],
            color: "Brown",
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
    axios.get(`http://localhost:8080/gameplays/colorquiz?colorQuizPlays=1`)
    .then(({data}) => {
    //   console.log(data)
    }
    ).catch(
           err => {
               console.log(err)
            }
        )

    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
}

const updatePlayTotal = () => {
    axios.get(`http://localhost:8080/gameplays/colorquiz?colorQuizPlays=1`)
    .then(({data}) => {
    //   console.log(data)
    }
    ).catch(
           err => {
               console.log(err)
            }
        )
}

useEffect( () => { 
    updatePlayTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])


  return (
      <>
      
      {/* <div className='color-quiz-title'> */}
          
      <ExperimentalNav/>
    <div className = "color-quiz">
        
        <h1 className='color-quiz-h1'>Color Quiz</h1>
        
        <h2 className='color-quiz-h2'>Current Score: {score}</h2>
        
        {showFinalResults ? (
        <div className="final-results-color">
            <h1>Final Results</h1>
            <h2>
                {score} out of {questions.length} correct!{score>4 ? " 😃": ""}
            </h2>
            <button className="color-quiz-btn" onClick={() => restartGame()}>Restart Game</button>
            <h3>Answers</h3>
            <ul className='color-quiz-ul'>
                {questions.map((x,index) =>{
                    return(
                        <li className='color-quiz-li' key={index}>{index + 1}.{questions[index].color}</li>
                    ) 
                })}  
            </ul>
        </div>

        ):(

        <div className="question-card-color">
            <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
            <h3 className="question-text" style={{color:`${questions[currentQuestion].color}`}}>{questions[currentQuestion].text}</h3>
            <ul className="color-quiz-ul">
                {questions[currentQuestion].options.map((option) => {
                    return (
                        <li className="color-quiz-li" onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                    );
                })}
            </ul>
        </div>
        )}
    </div>
    
    {/* </div> */}
    
    </>
  )
}

export default ColorQuiz