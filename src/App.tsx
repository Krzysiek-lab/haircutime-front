import React from 'react';

import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Navbar from './layout/Navbar';
import { Typography } from '@mui/material';

const App=()=> {

  return (
    
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
    
  );
}

export default App;
