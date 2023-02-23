import React from "react";
import { Box } from "@mui/material";
import { PostNowy } from "../../Posty/PostNowy";
import { PostStary } from "../../Posty/PostStary";

export const MainPage = () => {
  return <Box flex={4} p={2}>
    
  <PostNowy/>
  <PostStary/>
  </Box>;
};

export default MainPage;