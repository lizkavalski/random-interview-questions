import React from 'react';
import './style/style.scss';
import data from './component/data.json'
// import RandomQuestion from '../src/component/randomQuestion'


function App() {
  return (
    <div className="App">
      <h1>Interview Prep!</h1>
      <p>This is where the random Question funtion will go</p>
      <div id='buttons'>
        <button id='before'>Previous</button> 
        <button id= 'next'>Next</button>
      </div>
    </div>
  );
}

export default App;
