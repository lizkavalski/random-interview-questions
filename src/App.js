import React from 'react';
import './style/style.scss';
import RandomQuestion from '../src/component/randomQuestion'


function App() {
  return (
    <div className="App">
      <h1>Interview Prep!</h1>
      <RandomQuestion/>
      <div id='buttons'>
        <button id='before'>Previous</button> 
        <button id= 'next'>Next</button>
      </div>
    </div>
  );
}

export default App;
