import React from "react";
import { Box } from "@mui/material";
import { PostNowy } from "../../Posty/PostNowy";
import { PostStary } from "../../Posty/PostStary";
import { Heros } from "../pages/Heros";

export const MainPage = () => {
  return <Box flex={4} p={0}>
    <Heros/>
   {/* <PostNowy/> 
   <PostStary/>  */}
  </Box>;
};

export default MainPage;