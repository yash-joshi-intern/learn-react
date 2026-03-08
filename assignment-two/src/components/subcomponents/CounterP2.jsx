import React, { useEffect, useState } from 'react'

const CounterP2 = () => {
    
    const [count , setCount] = useState(0);

    useEffect(()=>{
        console.log("Initial Mount Only")

        const intervalID = setInterval(()=> {
            // setCount(count+1) this wong work use best practive prev things
            setCount((prev) => prev + 1)
            console.log("CLICK")
        },1000)

        return () => {
            console.log("Only On the UnMounted Stage Runs this CallBack")
            clearInterval(intervalID)
        };

    },[])

    return (
        <div>
            Counter : {count}
        </div>
    )
}

export default CounterP2