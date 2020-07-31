import React, {useState } from 'react';
import axios from 'axios';
import Box from'@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { borders, style } from '@material-ui/system'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  base:{
    background:'#d9d9d9',
    padding:'4em 8em 3em 8em',
  },
  title:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    flexWrap:"warp", 
    fontSize:"3em",
  },
  noteCard:{
    background:"#f7fca7",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    flexWrap:"warp",
    padding:"5em",
    fontSize:"2em",
  },
  buttonBox:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    flexWrap:"warp",
    paddingTop:"2em", 
    paddingBottom:"4em",
  },
  nButton:{
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
})






function RandomQuestion(){
  const [question, setQuestion] = useState('Click the button to start');
  const styles= useStyles();
  const url = 'https://random-interview.herokuapp.com/question/random';
  
  const fetchData = async () => { 
    const respone = await axios.get(url)
    setQuestion(respone.data.question) 
  }
  
  return(
    <>
    <head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </head>
    <Box className={styles.base}> 
      <Box className={styles.title}>
        <h1>Interview Perp!</h1>
      </Box>
      <Box className={styles.noteCard}>
        <p>{question}</p>
      </Box>
      <Box className={styles.buttonBox}>
        <div>
          <Button className={styles.nButton} onClick={fetchData}>Next</Button>
        </div>
      </Box>
    </Box>
    </>
  )
}


export default RandomQuestion;