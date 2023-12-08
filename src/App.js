import * as React from 'react';
import Box from '@mui/material/Box';
import SideBar from './features/sidebar'
import Admin from './features/admin'

function App() {
  return (
    <Box display= {{ sm: 'flex' }} >
       <SideBar />
        <Admin />
    </Box>
  );
}

export default App;
