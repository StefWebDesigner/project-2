import React, { useState, useEffect } from 'react'
import ExperimentalNav from '../../../navbar/ExperimentalNav';
import './AnimalQuiz.css'
import axios from 'axios'

function AnimalQuiz() {
    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    

    const questions = [
        {
            text: "What animal is this?",
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
            text: "What animal is this?",
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
            text: "What animal is this?",
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
            text: "What animal is this?",
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
            text: "What animal is this?",
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
            text: "What animal is this?",
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
            text: "What animal is this?",
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
            text: "What animal is this?",
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
            text: "What animal is this?",
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
    axios.get(`http://localhost:8080/gameplays/animalquiz?animalQuizPlays=1`)
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
    axios.get(`http://localhost:8080/gameplays/animalquiz?animalQuizPlays=1`)
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
      <ExperimentalNav/>
    <div className = "animal-quiz fade-in-animation">
        
        <h1>Animal Quiz</h1>
        
        <h2>Current Score: {score}</h2>
        
        {showFinalResults ? (

        
        <div className="final-results">
            <h1>Final Results</h1>
            <h2>
                {score} out of {questions.length} correct!{score>4 ? " 😃": ""}
            </h2>
            <button className="animal-quiz-btn" onClick={() => restartGame()}>Restart Game</button>
            <h3>Answers</h3>
            <ul className='animal-quiz-ul'>
                {questions.map((x,index) =>{
                    return(
                        <li className='animal-quiz-li' key={index}>{index + 1}.{questions[index].answer}</li>
                    ) 
                })}
                
                    
            </ul>
        </div>

        ):(

         
        <div className="question-card">
            <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
            <h3 className="question-text" >{questions[currentQuestion].text}</h3>
            <img className="animal-quiz-img" src={questions[currentQuestion].src} alt="Animal"/>
            <ul className="animal-quiz-ul">
                {questions[currentQuestion].options.map((option) => {
                    return (
                        <li className="animal-quiz-li" onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                    );
                })}
            </ul>
        </div>
        )}
    </div>
    </>
  )
}

export default AnimalQuiz