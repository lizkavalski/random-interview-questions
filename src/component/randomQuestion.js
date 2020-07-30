import React, {useState } from 'react';
import axios from 'axios';
import Box from'@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { borders } from '@material-ui/system'



function RandomQuestion(){
  const [question, setQuestion] = useState('Click the button to start');

  const url = 'https://random-interview.herokuapp.com/question/random';
  
  const fetchData = async () => { 
    const respone = await axios.get(url)
    setQuestion(respone.data.question) 
  }
  
  return(
    <>
    <Box margin="5em">
      <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="warp">
        <h1>Interview Perp!</h1>
      </Box>
      <Box bgcolor="#f7fca7" display="flex" flexDirection="row" justifyContent="center" alignItems="center" flexWrap="warp">
        <p>{question}</p>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="warp">
        <div>
          <Button variant="contained" color="primary"  onClick={fetchData}>Next</Button>
        </div>
      </Box>
    </Box>
    </>
  )
}


export default RandomQuestion;