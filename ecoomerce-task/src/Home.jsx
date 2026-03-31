import React from 'react'
import App from './App'
import One from './One'
import { Routes , Route}  from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from './redux/store';

const Home = () => {
  return (
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/one" element={
          <Provider store={store}>
            <One/>
          </Provider>
        }/>
    </Routes>
  )
}

export default Home