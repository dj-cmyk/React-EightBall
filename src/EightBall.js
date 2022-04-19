import React, {useState} from "react";
import './EightBall.css';


const EightBall = (props) => {
    const randomAnswer = () => {
        const idx = Math.floor(Math.random() * (props.answers.length));
        return props.answers[idx]
    }

    const setEightBall = () => {
        const response = randomAnswer()
        setMessage(response.msg)
        setColor(response.color)
    }

    const reset = () => {
        setMessage("Think of a Question")
        setColor("black")
    }
    
    const [message, setMessage] = useState("Think of a Question")
    const [color, setColor] = useState("black")
    const isAnswered = color !== 'black'

    return (
        <div className='EightBall'>
            <button className='EightBall-btn' style={{backgroundColor: color}}>{message}</button>

            {!isAnswered && 
            <button onClick={() => setEightBall()}>Ask Your Question</button>
            }
            
            <button onClick={() => reset()}>Reset</button>
        </div>
    )
}

export default EightBall;