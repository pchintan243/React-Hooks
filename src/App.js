import React, { useState } from 'react'
import RulesHook from './component/RulesHook';
import UseStateArray from './component/UseStateArray';
import UseStateObject from './component/UseStateObject';
import './App.css';
import ShortCircuitEval from './component/ShortCircuitEval';
import BasicForm from './component/BasicForm';
import Component1 from './component/useContext/Component1';
import UseEffect1 from './component/useEffect/UseEffect1';
import UseEffect2 from './component/useEffect/UseEffect2';
import UseEffectAPI from './component/useEffect/UseEffectAPI';
import UseReducer from './component/UseReducer';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/useLocation/Home';
import About from './component/useLocation/About';

const App = () => {

  const [myName, setMyName] = useState('hello')

  const changeName = () => {
    // Value will be change when user click on the button
    // setMyName("Chintan Patel");

    // Toggle implement on button
    myName === 'hello' ? setMyName('Chintan Patel') : setMyName('hello');
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
      
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>

        </Routes>
      </Router>
      <div className="container">
        {/* <h1>{myName}</h1> */}
        {/* <button className="btn btn-danger" onClick={changeName}>Click It..!!</button> */}
        {/* <RulesHook /> */}
        {/* <UseStateArray /> */}
        {/* <UseStateObject /> */}
        {/* <ShortCircuitEval /> */}
        {/* <BasicForm /> */}
        {/* <UseEffect1 /> */}
        {/* <UseEffect2 /> */}
        {/* <UseEffectAPI /> */}
        {/* <UseReducer /> */}
        {/* <Component1 /> */}
      </div>
    </>
  )
}

export default App