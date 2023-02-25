import { Copyright } from "@mui/icons-material";
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Grid, TextField, ThemeProvider, Typography } from "@mui/material";
import axios from "axios";
import { stringify } from "querystring";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Link, useNavigate, useParams } from "react-router-dom";




const theme = createTheme();
const EditPage = () => {
    const navigate = useNavigate();
  const [barber, setBarber] = React.useState<Barber[]>([]);
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const[gender,setGender]=React.useState("");
  const [error, setError] = useState({
    name: "",
    surname: "",
    gender: "",
  });
  const { id } = useParams();
  interface Barber {
    id: string|undefined;
    name: string;
    surname: string;
    gender: string;
  }
  

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBarber({ ...barber, [event.target.name]: event.target.value });
  };
  React.useEffect(() => {
    loadBarber(id);
  }, []);
  

  const loadBarber = async (id:string|undefined) => {
    const result = await axios.get(`http://localhost:8080/barber/get/${id}`);
    setBarber(result.data);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const barberNew = {
        id,
        name,
        surname,
        gender,
      }
    axios
      .put(`http://localhost:8080/barber/update/${id}`,barberNew) 
        
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
      navigate("/AdminPage")
  };
return(
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
          <Typography component="h1" variant="h5">
            Edytuj dane fryzjera
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
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Podaj Imie"
                  placeholder="Imię fryzjera"
                  autoFocus
                  value={name}
                  helperText={error.name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="surname"
                  label="Podaj Nazwisko"
                  placeholder="Nazwisko fryzjera"
                  name="surname"
                  value={surname}
                  helperText={error.surname}
                  onChange={(event) => {
                    setSurname(event.target.value);
                  }}
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="gender"
                  label="Podaj Płeć"
                  placeholder="Twoja płeć"
                  type="gender"
                  id="gender"
                  value={gender}
                  helperText={error.gender}
                  onChange={(event) => {
                    setGender(event.target.value);
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


export default EditPage;