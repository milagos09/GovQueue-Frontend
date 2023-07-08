import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
 export default function ButtonAppBar() {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
   return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" style={{ paddingRight: '20%' }}>
            LOGO
          </Typography>
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around' }}>
            <Typography variant="h6" component="div">
              Home
            </Typography>
            <Typography variant="h6" component="div">
              About Us
            </Typography>
            <Typography variant="h6" component="div">
              Support
            </Typography>
          </div>
          <Typography variant="h6" component="div" style={{ paddingLeft: '20%' }}>
            {currentDate} {currentTime}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}