import React, { useState, useEffect } from "react";
import Header from "./Header";
import Figure from "./Figure";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import Popup from "./Popup";
import axios from 'axios';
import './Hangman.css'
import ExperimentalNav from "../../navbar/ExperimentalNav";

const words = ['cat', 'apple', 'banana', 'airplane', 'dog', 'red', 'yellow', 'blue', 'orange', 'green', 'purple'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

export default function Hangman() {
const [playable, setPlayable] = useState(true);
const [correctLetters, setCorrectLetters]=useState([]);
const [wrongLetters, setWrongLetters]=useState([]);


useEffect(() => {
    const handleKeydown = event => {
       const { key, keyCode} = event;
		if (playable && keyCode >= 65 && keyCode <= 90) {
			const letter = key.toLowerCase();

			if (selectedWord.includes(letter)) {
				if (!correctLetters.includes(letter)) {
					setCorrectLetters(currentLetters => [...currentLetters, letter]);
					} else {
					
				}
			} else {
				if (!wrongLetters.includes(letter)) {
					setWrongLetters(wrongLetters => [...wrongLetters, letter]);
				} else {
					
				}
			}
		}	
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
}, [correctLetters, wrongLetters, playable]);

function playAgain(){
    axios.get(`http://localhost:8080/gameplays/hangman?hangmanPlays=1`)
    .then(({data}) => {
    //   console.log(data)
    }
    ).catch(
           err => {
               console.log(err)
            }
        )
    setPlayable(true);

    //Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
}

const updatePlayTotal = () => {
    axios.get(`http://localhost:8080/gameplays/hangman?hangmanPlays=1`)
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

    return(
        <>
        <ExperimentalNav/>
        <div className="hangman-body fade-in-animation">
        <Header/>
        <div className="game-container">
            <Figure wrongLetters={wrongLetters}/>
            <WrongLetters wrongLetters={wrongLetters}/>
            <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        </div>
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} 
        setPlayable={setPlayable} playAgain={playAgain} />
        </div>
        </>
    )
}
    

    
