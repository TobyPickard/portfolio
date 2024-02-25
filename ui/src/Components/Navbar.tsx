import React from 'react';
import { AppBar, Toolbar, Typography, useScrollTrigger, Slide, Button } from '@mui/material';

const TopNavbar = () => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Toby Pickard
          </Typography>
          {/* Add additional items such as buttons, links, or icons here */}
          <Button style={{color: 'white'}}>
            Test
          </Button>
          <Button style={{color: 'white'}}>
            Test
          </Button>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default TopNavbar;
