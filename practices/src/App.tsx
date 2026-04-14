import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import Controller from './components/Controller'
import Items from './components/Items'
import Toggle from './components/Toggle'
import  Form  from "./components/Form"
import MultiForm from './components/MultiForm'
import ToggleText from './components/ToggleText'
import Props from './components/Props'
import Timer from './components/Timer'
import FetchData from './components/FetchData'

function App() {
  

  return (
    <>
     <p> QUICK PRACTICE </p>
     <Counter/>
     <Controller/>
     <Items/>
     <Toggle/>
     <Form/>
     <MultiForm/>
     <ToggleText/>
     <Props/>
     <Timer/>
     <FetchData/>
    </>
  )
}

export default App
