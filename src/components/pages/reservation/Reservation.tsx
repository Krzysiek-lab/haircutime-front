import axios from "axios";
import React, { useState } from "react";
import Calendar from "./Calendar";
import BarberSelect from "./Select";
import CommonButton from "../common/CommonButton";
import Grid from "@mui/material/Grid";
import { Card, CardContent, TextField, Typography } from "@mui/material";

export const Reservation = (props: any) => {
  const buttonStyles = {
    fontSize: 20,
    fontWeight: 700,
    backgroundColor: "#101F33",
  };
  const [user, setUser] = useState({
    name: "",
    surname: "",
    date: Date,
  });
  const selectedBarber = (data: string) => {
    console.log("comming from reservation.tsx", data);
    setUser({ ...user, [data]: data });
  };
  const selectedDate = (date: Date) => {
    console.log("comming from reservation.tsx", date);
    // setUser({...user,[date()],;
  };
  const { name, surname, date } = user;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
    <Typography gutterBottom variant="h5" align="center">
        Rezerwacja Terminu
      </Typography>
      <Card>
        <CardContent>
          <form>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Twoje Imie"
                placeholder="Podaj imie"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Twoje Nazwisko"
                placeholder="Podaj nazwisko"
                fullWidth
                required
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                type="Email"
                label="Twoje Email"
                placeholder="Podaj email"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                type="Number"
                label="Twoje numer telefonu"
                placeholder="Podaj numer telefonu"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="Message"
                multiline
                rows={4}
                label="Twoja wiadomosc"
                placeholder="Zadaj swoje pytanie"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={4}item>
            <h3>Wybierz Barbera:</h3>
            <BarberSelect onSelectedBarber={selectedBarber} />
            </Grid>
            <Grid xs={4}item>
            <h3>Wybierz Termin:</h3>
            <Calendar onSelectedDate={selectedDate} />
            </Grid>
            <Grid xs={6} md={8} item>
              <CommonButton
                size="medium"
                variant="contained"
                type="submit"
                fullWidth
              >
                Wyslij
              </CommonButton>
              {/* //<Button variant="contained">Wyslij</Button> */}
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
      </div>
    // <Grid item xs={8} >
    //   <form className="reservation-form" onSubmit={(e) => formSubmitHandler(e)}>
    //     <h2 className="reservation-h2">Dokonaj Rezerwacji</h2>
    //     <div className="new-reservation">
    //       <label>Imie:</label>
    //       <input
    //         type="text"
    //         name="name"
    //         value={name}
    //         onChange={(e) => onInputChange(e)}
    //       ></input>
    //     </div>
    //     <div className="new-reservation">
    //       <label>Nazwisko:</label>
    //       <input
    //         type="text"
    //         name="surname"
    //         value={surname}
    //         onChange={(e) => onInputChange(e)}
    //       ></input>
    //     </div>

    //     <h3>Wybierz Barbera:</h3>
    //     <BarberSelect onSelectedBarber={selectedBarber} />

    //     <Calendar onSelectedDate={selectedDate} />
    //     <CommonButton 
    //     size="large" 
    //     variant="contained" 
    //     sx={buttonStyles}
    //     type="submit">
    //       Rezerwuj!
    //     </CommonButton>
      
    //   </form>
    // </Grid>
  );
};
export default Reservation;
