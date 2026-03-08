import React, { useState } from 'react'
import CounterP2 from './subcomponents/CounterP2'

const ProblemTwo = () => {
    
    const [showCounter, setShowCounter] = useState(true)
    const [direction, setDirection] = useState("Stop")

    return (
        <div>
            <h3>Problem Two</h3>
            <button onClick={(e) => {
                setShowCounter(!showCounter)
                if(direction === "Stop"){
                    setDirection("Start")
                }else{
                    setDirection("Stop")
                }
            }}> Click To {direction} </button>

            {showCounter && <CounterP2/>}
        </div>
    )
}

export default ProblemTwo