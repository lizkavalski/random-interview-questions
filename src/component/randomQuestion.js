import React, {useState } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card'
import Box from'@material-ui/core/Box';
import Button from '@material-ui/core/Button';


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
      <Card display="flex" flexDirection="row" justifyContent="center" flexWrap="warp">
        <p>{question}</p>
      </Card>
      <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="warp">
        <div>
          <Button variant="contained" color="primary"  monClick={fetchData}>Next</Button>
        </div>
      </Box>
    </Box>
    </>
  )
}


export default RandomQuestion;