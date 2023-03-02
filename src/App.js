import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [myName, setMyName] = useState('hello')

  const changeName = () => {
    // Value will be change when user click on the button
    setMyName("Chintan Patel");
  }

  return (
    <div className="container text-center">
      <h1>{myName}</h1>
      <button className="btn btn-danger" onClick={changeName}>Click It..!!</button>
    </div>
  )
}

export default App