import React from 'react';
import './style/style.scss';
import data from './component/data.json'
import RandomQuestion from './component/randomQuestion';


function App() {
  return (
    <div className="App">
      <h1>Interview Prep!</h1>
      <RandomQuestion/>
      <div id='buttons'>
        <button id= 'next'>Next</button>
      </div>
    </div>
  );
}

export default App;
