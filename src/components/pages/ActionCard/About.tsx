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
<<<<<<< Updated upstream
        <ActionCardBrygida />
        <ActionCardStefan />
=======
        <ActionCardStefan />
        <ActionCardBrygida />
>>>>>>> Stashed changes
      </Stack>
    </div>
  );
};
export default About;
