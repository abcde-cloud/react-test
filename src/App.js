import * as React from 'react';
import Box from '@mui/material/Box';
import SideBar from './features/sidebar'
import Admin from './features/admin'

function App() {
  return (
    <Box sx={{ display: 'flex', bgcolor: '#f5f5f5' }} >
       <SideBar />
        <Admin />
    </Box>
  );
}

export default App;
