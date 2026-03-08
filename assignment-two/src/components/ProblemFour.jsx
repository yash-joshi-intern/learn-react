import React, { useContext, useState } from 'react'
import { ThemeContext } from './subcomponents/ThemeContext'

const ProblemFour = () => {
    const [theme , themeTwo] = useContext(ThemeContext)
    const [themeState, setThemeState] = useState(theme)

    return (
    <div
        style={{
            backgroundColor: themeState === "dark" ? "transparent" : "white",
            color: themeState === "dark" ? "white" : "black",
            padding: "20px"
        }}
    >
        <h3>Problem Four</h3>
        <p> Theme Name : {themeState}</p>
        <button onClick={()=>{
            if(themeState.toLowerCase() === "dark"){
                console.log("changing to white")
                setThemeState("white")
            }else{
                console.log("changing to dark")
                setThemeState("dark")
            }
        }}> Change Theme </button>
    </div>
  )
}

export default ProblemFour