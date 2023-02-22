import React from "react";

import { Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h3" component="h1">
        Welcome to My App
      </Typography>
   
      <Typography variant="body1">
        This is a sample home page component written in TypeScript.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/register"
      >
        Register
      </Button>
    </div>
  );
};

export default MainPage;
