import React, {useState} from "react";
import './NumberGame.css';

const NumberGame = (props) => {
    const genRandom = () => Math.floor((Math.random() * 10) + 1);

    const restart = () => {
        setTarget(genRandom())
        setGuess(0)
        setCount(0)
    }

    const makeGuess = () => {
        setGuess(genRandom())
        setCount(count + 1)
    }

    const [guess, setGuess] = useState(genRandom());
    const [target, setTarget] = useState(genRandom());
    const [count, setCount] = useState(0);

    const isWinner = target === guess;
    
    return (
        <div className='NumberGame'>
            <h1>Target Num: {target}</h1>
            <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess: {guess} </h1>
            <h4>Number of Clicks: {count}</h4>
            {!isWinner && 
            <button className='NumberGame-btn' onClick={() => makeGuess()}>Take a Guess</button> 
            }
            <button className='NumberGame-btn' onClick={restart}>New Game</button>
        </div>
    )
}

export default NumberGame;