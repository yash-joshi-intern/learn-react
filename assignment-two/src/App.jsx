import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProblemOne from './components/ProblemOne'
import ProblemTwo from './components/ProblemTwo'
import ProblemThree from './components/ProblemThree'
import ProblemFour from './components/ProblemFour'
import ProblemFive from './components/ProblemFive'
import { ThemeContext } from './components/subcomponents/ThemeContext'
import ProblemSeven from './components/ProblemSeven'
import ProblemSix from './components/ProblemSix'

function App() {
  const [counterForThree, setCounterForThree] = useState(false)
  const theme = "dark";
  const themeTwo = "light"

  return (
    <div>
      <p className="read-the-docs">
        Session Two Self Learning - Assignment-Two
      </p>
      {<ProblemOne/>}
      {<ProblemTwo/>}
      <h5>Click To Stop </h5> : <button onClick={()=>{
        setCounterForThree(!counterForThree)
      }}> Unload Component
      </button>{ counterForThree && <ProblemThree/>}
      <ThemeContext.Provider value={[theme, themeTwo]} >
        {<ProblemFour/>}
      </ThemeContext.Provider>
      {<ProblemFive/>}
      {<ProblemSix/>}
      {<ProblemSeven/>}
    </div>
  )
}

export default App
