import { Stack } from "@mui/system";
import React from "react";
import ActionCardBrygida from "./ActionCardBrygida";
import ActionCardCzeslaw from "./ActionCardCzeslaw";
import ActionCardStefan from "./ActionCardStefan";

export const About = () => {
  return (
    <div className="body">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <ActionCardCzeslaw />
        <ActionCardBrygida />
        <ActionCardStefan />
      </Stack>
    </div>
  );
};
export default About;
