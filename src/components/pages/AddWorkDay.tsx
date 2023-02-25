import { Copyright } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { HtmlHTMLAttributes, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Link, useParams } from "react-router-dom";
import Logo from "./images/Logo.png";


const theme = createTheme();
const AddWorkDay = () => {
  const [barberId, setBarberId] = React.useState("");
  const [workYear, setWorkYear] = React.useState("");
  const [year, setYear] = React.useState("");
  const [workDay, setWorkDay] = React.useState("");
  const [workDayList, setWorkDayList] = React.useState<WorkDayList[]>([]);
  const [error, setError] = useState({
    year: "",
    barberId: ""
  });

  const { id } = useParams();
  interface WorkDayList{
}

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const workYear = {
      year:2023,
      barberId: 3,
      workDayList:[],
    };
    axios
      .post("http://localhost:8080/workyear/create",workYear) 
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} src={Logo} />

          <Typography component="h1" variant="h5">
            Dodaj Dni Pracy
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleFormSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-year"
                  name="year"
                  required
                  fullWidth
                  id="year"
                  label="Podaj WorkYear"
                  placeholder="np.2023"
                  autoFocus
                  value={year}
                  helperText={error.year}
                  onChange={(event) => {
                    setYear(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="WorkDayList"
                  label="Podaj WorkDay"
                  placeholder="np.20"
                  value={workDayList}
                  //helperText={error.workDayList}
                  onChange={(event) => {
                    //setWorkDayList(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Wyślij
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddWorkDay;