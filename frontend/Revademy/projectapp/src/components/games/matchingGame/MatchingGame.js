import { useEffect, useRef, useState } from 'react'
import './MatchingGame.css'
import SingleCard from './SingleCard'
import ExperimentalNav from '../../navbar/ExperimentalNav';
import Confetti from 'react-confetti';

const cardImages=[
  {"src": "/img/apple.png", matched: false, pair: 1 },
  {"src": "/img/banana.png", matched: false, pair: 2 },
  {"src": "/img/cat.png", matched: false, pair: 3 },
  {"src": "/img/dog.png", matched: false, pair: 4 },
  {"src": "/img/airplane.png", matched: false, pair: 5 },
  {"src": "/img/car.png", matched: false, pair: 6 },
  {"src": "/img/apple-1.png", matched: false, pair: 1 },
  {"src": "/img/banana-1.png", matched: false, pair: 2 },
  {"src": "/img/cat-1.png", matched: false, pair: 3 },
  {"src": "/img/dog-1.png", matched: false, pair: 4 },
  {"src": "/img/airplane-1.png", matched: false, pair: 5 },
  {"src": "/img/car-1.png", matched: false, pair: 6 },
]

let allPairsMatched = (cardImages.length)/2;

export default function MatchingGame() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [pairs, setPairs] = useState(0)
  const[height, setHeight] = useState(null)
  const[width, setWidth] = useState(null)
  const confettiRef = useRef(null)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages]
     .sort(() => Math.random() - 0.5)
     .map((card) => ({ ...card, id:Math.random() }))

     setChoiceOne(null)
     setChoiceTwo(null)
     setCards(shuffledCards)
     setTurns(0)
     setPairs(0)
  }

 //handle a choice
 const handleChoice = (card) =>{
   choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
 }

 //compare 2 selected cards
 useEffect(() => {
  if (choiceOne && choiceTwo) {
    setDisabled(true)
    if (choiceOne.pair === choiceTwo.pair) {
      setPairs(prevPairs => prevPairs +1)
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.pair === choiceOne.pair){
            return {...card, matched: true}
          } else{
            return card
          }
        })
      })
      resetTurn()
    } else{
      
      setTimeout(() => resetTurn(), 1000)
    }
  }
 }, [choiceOne, choiceTwo])

 

 //reset choices and increase turn
 const resetTurn = () =>{
   setChoiceOne(null)
   setChoiceTwo(null)
   setTurns(prevTurns => prevTurns + 1)
   setDisabled(false)
 }

 //start a new game automatically
useEffect(() => {
  shuffleCards()
}, [])

//Confetti
useEffect(() => {
  setHeight(1000);
  setWidth(confettiRef.current.clientWidth);
}, [])


  return (
    <>
    <div ref={confettiRef}>
    <ExperimentalNav/>
    
    <div className="MatchingGame fade-in-animation" ref={confettiRef} >
      <h1>Matching Game</h1>
      <button className="MatchingGameBtn" onClick={shuffleCards}>New Game</button>
      
      <div className="card-grid" ref={confettiRef}>
        {cards.map(card => (
          <SingleCard 
           key={card.id} 
           card={card} 
           handleChoice={handleChoice} 
           flipped={card === choiceOne || card === choiceTwo || card.matched}
           disabled={disabled}
           />
        ))}
      </div>
      <p>Turns: {turns}</p>
      <p>{pairs===allPairsMatched ? "You Won! 😃" : ""}</p>
    </div>
    {pairs===allPairsMatched ?
    <Confetti
      numberOfPieces={200}
      width={width}
      height={height}
     />
    :
     ""
    } 
    </div>
    </>
  );
}

