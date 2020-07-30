import React from 'react';
// import './style/style.scss';
import RandomQuestion from './component/randomQuestion';
import Box from'@material-ui/core/Box';

function App() {
  return (
    <>
    <Box bgcolor="#d9d9d9">
      <RandomQuestion/>
    </Box>
    </>
  );
}

export default App;
