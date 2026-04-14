import  { useEffect, useRef, useState } from 'react'

const Timer = () => {

    const [seconds, setSeconds] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false)
    const intervalRef = useRef<any | null>(null)

    useEffect(() => {
        if(running){
            intervalRef.current = setInterval(()=> {
                setSeconds(prev => prev + 1)
            }, 1000)
        }else{
            clearInterval(intervalRef.current)
        }
        return () => clearInterval(intervalRef.current)
    }, [running])

    return (
        <>
            <div> {seconds} Seconds</div>
            <div>
                <button onClick={() => {
                    setRunning(!running)
                }}> {!running ? <p> Start </p> : <p> Stop </p>}</button>
                <button onClick={() => {
                    setRunning(false)
                    setSeconds(0)
                }}> Restart </button>
            </div>
        </>
    )
}

export default Timer