import React, { useEffect,useState } from 'react';
import axios from 'axios';


function RandomQuestion(){
  const [question, setQuestion] = useState([]);
  
  const url = 'https://random-interview.herokuapp.com/question/random';
  const fetchData = async () => { 
    const respone = await axios.get(url)
    setQuestion(respone.data.question) 
  }
  return(
    <>
    <div className = 'notecard'>
      <p>{question}</p>
    </div>
    <div>
      <button className="fatch-data" onClick={fetchData}>Next</button>
    </div>
    </>
  )
}

export default RandomQuestion;