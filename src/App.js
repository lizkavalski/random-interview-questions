import React from 'react';
import './style/style.scss';

function App() {
  return (
    <div className="App">
      <h1>Interview Prep!</h1>
      <p> This is where Interview questions go</p>
      <div id='buttons'>
        <button id='before'>Previous</button> 
        <button id= 'next'>Next</button>
      </div>
    </div>
  );
}

export default App;
