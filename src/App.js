import React from 'react';
// import './style/style.scss';
import RandomQuestion from './component/randomQuestion';
import Box from'@material-ui/core/Box';

function App() {
  return (
    <>
    <Box bgcolor="palevioletred">
      <RandomQuestion/>
    </Box>
    </>
  );
}

export default App;
