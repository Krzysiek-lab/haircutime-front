import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const BarberSelect = (props: any) => {
  const [barber, setBarber] = React.useState("");

  const changeHandler = (event: SelectChangeEvent) => {
    props.onSelectedBarber(event.target.value);
  };
  return (
    <Box sx={{ width: 300, height: "20vh" }}>
      <FormControl fullWidth>
        <InputLabel id="barber-selector-label">Dostepni Barberzy</InputLabel>
        <Select
          labelId="barber-selector-label"
          id="barber-selector"
          value={barber}
          label="Dostepni Barberzy"
          onChange={changeHandler}
        >
          <MenuItem value={"Czesiek Czapka"}>Czesiek Czapka</MenuItem>
          <MenuItem value={"Stefan Jajecznica"}>Stefan Jajecznica</MenuItem>
          <MenuItem value={"Brygida Mocznik"}>Brygida Mocznik</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default BarberSelect;
