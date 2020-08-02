import React from 'react';
import {Box, Grid} from'@material-ui/core/';
import {makeStyles} from '@material-ui/core/styles';


 const useStyles = makeStyles({
  title:{
    textAlign: 'center',
    textShadow:'3px 5px 2px #9c9c9c',
    fontSize:"4em",
    fontFamily:['Permanent Marker','cursive']
  },
  subTitle:{
    textAlign: 'center',
    fontSize:"1.5em",
    fontFamily:['Permanent Marker','cursive']
  }
 });

 function Header(){
  const styles= useStyles();
  return(
    <>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      >
      <Box>
        <h1 className={styles.title}>Interview Perp!</h1>
        <h3 className={styles.subTitle}> Click the 'Next' button for the next question!</h3>
      </Box>
    </Grid>
    </>
  )
 }

 export default Header;