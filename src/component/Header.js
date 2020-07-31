import React from 'react';
import Box from'@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';


 const useStyles = makeStyles({
 title:{
   display:"flex",
   flexDirection:"row",
   justifyContent:"center",
   flexWrap:"warp", 
   fontSize:"3em",
   fontFamily:"Helvetica Neue",
  },
  subTitle:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    flexWrap:"warp", 
    fontSize:"1.5em",
    marginTop:'-2.8em',
  }
 });

 function Header(){
  const styles= useStyles();
  return(
    <>
    <Box className={styles.title}>
        <h1>Interview Perp!</h1>
    </Box>
    <Box className={styles.subTitle}>
      <h3> Click the 'Next' button for the next question!</h3>
    </Box>

    </>
  )
 }

 export default Header;