import React, { useState, useEffect } from "react";
import NavbarMain from "../../navbar/NavbarMain";
import Header from "./Header";
import Figure from "./Figure";
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import Popup from "./Popup";

import './Hangman.css'

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
    setPlayable(true);

    //Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
}


    return(
        <>
        {/* <NavbarMain/> */}
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
    

    
