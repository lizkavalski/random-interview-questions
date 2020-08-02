import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Box from'@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  base:{
    // background:'#d9d9d9',
    padding:'4em 8em 3em 8em',
  },
  noteCard:{
    background:"#f7fca7",
    boxShadow:"12px 12px 2px 6px #d9d9d9",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:'5em 5em',
    flexWrap:"warp",
    boxSizing: 'content-box',
  },
  noteCardWriting:{
    fontSize:"3em",
    fontFamily:['Nanum Pen Script', 'cursive'],

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
});

function RandomQuestion(){
  const [question, setQuestion] = useState('');
  const [loading, setLoading]= useState(true)
  const [fetching, setFetching]=useState(false)
  const styles= useStyles();
  const url = 'https://random-interview.herokuapp.com/question/random';
  
  useEffect(() =>{
    const fetchData = async () => { 
      setLoading(true);
       const respone = await axios.get(url)
       setQuestion(`${respone.data.question}`) 
       setLoading(false)
     }
     fetchData()
  },[fetching])


  return(
    <>
    <head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </head>
    <Box className={styles.base}> 
      <Box className={styles.noteCard}>
        {loading ? (
          <CircularProgress />
        ):(
          <Box className={styles.noteCardWriting}>{question}</Box>
        )}
      </Box>
      <Box className={styles.buttonBox}>
        <div>
          <Button className={styles.nButton} onClick={() => setFetching(!fetching)}>Next</Button>
        </div>
      </Box>
    </Box>
    </>
  )
}


export default RandomQuestion;