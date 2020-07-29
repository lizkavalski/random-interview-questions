import React from 'react';
import './style/style.scss';
import RandomQuestion from './component/randomQuestion';


function App() {
  return (
    <div className="App">
      <h1>Interview Prep!</h1>
      <RandomQuestion/>
    </div>
  );
}

export default App;
