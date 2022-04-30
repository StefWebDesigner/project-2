import React, { useEffect } from 'react'
import './Popup.css'

const Popup =({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    const checkWin = (correct, wrong, word) => {
      let status = 'win';
  
      //check for win
      word.split('').forEach(letter => {
          if(!correct.includes(letter)){
              status = '';
          }
      });
  
      //check for lose
      if(wrong.length === 9) status = 'lose';
  
      return status;
  }

    if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
        finalMessage = 'You won! 😃';
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
        finalMessage = 'You lost. 😕';
        finalMessageRevealWord = `The word was: ${selectedWord}`;
        playable = false;
    }

    useEffect(() => setPlayable(playable));

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button className="popup-btn" onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup