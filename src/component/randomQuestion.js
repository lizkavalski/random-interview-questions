import React, {useState, useEffect } from 'react';
import axios from 'axios';
import {Box, Button, Grid, CircularProgress, Card} from'@material-ui/core/';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  noteCard:{
    textAlign: 'center',
    backgroundImage:'url(https://upload.wikimedia.org/wikipedia/commons/2/2e/Notecard.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxShadow: '.5em .5em .3em #9c9c9c',
    paddingTop:'5em',
    paddingBottom:'2em',
    marginLeft:'5em',
    marginRight:'5em',
  },
  noteCardWriting:{
    textAlign: 'center', 
    fontSize:"3em",
    fontFamily:['Nanum Pen Script', 'cursive'],
  },
  buttonBox:{
    textAlign: 'center',
    paddingTop:"2em", 
    paddingBottom:"4em",
  },
  nButton:{
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    textAlign: 'center',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #9c9c9c',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
});

function RandomQuestion(){
  const [question, setQuestion] = useState('Click the button to begin');
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
   <Grid 
        direction="column"
        justify="center" 
        alignItems="center"
      >
      <Card className={styles.noteCard}>
        {loading ? (
          <CircularProgress />
          ):(
            <Box className={styles.noteCardWriting}>{question}</Box>
            )}
        <Box className={styles.buttonBox}>
            <Button className={styles.nButton} onClick={() => 
            setFetching(!fetching)}> Next</Button>
        </Box>
      </Card>
    </Grid>
    </>
  )
}


export default RandomQuestion;