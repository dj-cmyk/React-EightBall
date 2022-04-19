import React from 'react';
import EightBall from './EightBall';
import Answers from './Answers';


import './App.css';


function App() {
  return (
    <div className="App">
      <EightBall answers={Answers}/>
    </div>
  );
}

export default App;
