// src/App.js
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import LoginSuccess from './components/loginSuccess';

function App() {

  const [success, setSuccess] = useState(false)

  const submitForm = () => {
    setSuccess(true)
  }

  return (
    <div className="App">
      {/* <Login /> */}
      {!success ? (<Login submitForm={submitForm} />) : (<LoginSuccess />)}
    </div>
  );
}

export default App;