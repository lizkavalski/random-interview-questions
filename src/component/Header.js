import React from 'react';
import Box from'@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';


 const useStyles = makeStyles({
  base:{
  boxSizing: 'content-box',
  width: '100%',
  },

  title:{
   display:"flex",
   flexDirection:"row",
   justifyContent:"center",
   flexWrap:"warp", 
   fontSize:"3em",
   fontFamily:['Permanent Marker','cursive']
  },
  subTitle:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    flexWrap:"warp", 
    fontSize:"1.5em",
    marginTop:'-2.8em',
    fontFamily:['Permanent Marker','cursive']
  }
 });

 function Header(){
  const styles= useStyles();
  return(
    <>
    <Box className={styles.base}>
      <Box className={styles.title}>
          <h1>Interview Perp!</h1>
      </Box>
      <Box className={styles.subTitle}>
        <h3> Click the 'Next' button for the next question!</h3>
      </Box>
    </Box>

    </>
  )
 }

 export default Header;