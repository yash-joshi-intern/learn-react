import { useState } from "react"

const ProblemOne = () => {

    const [name , setName] = useState("Initial");
    const [age , setAge] = useState(0);

    return (
        <>
            <h3>Probelem One</h3>

            <h4> Name : {name}</h4>
            <h4>  Age: {age} </h4>

            <div>
                Enter the Name : <input onChange={(e) => {
                    setName(e.target.value)
                }}></input>
            </div>
    
            <div>
                Click To Increment Age : <button onClick={()=>{
                    setAge(age+1)
                }}> Click </button>
            </div>
        </>
    )
}

export default ProblemOne