<<<<<<< Updated upstream
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
=======
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";
>>>>>>> Stashed changes

import { useState } from "react";
import Logo from "../images/Logo.png";
import { Container } from "@mui/material";
import { send } from "emailjs-com";
function Copyright(props: any) {
  return (
<<<<<<< Updated upstream
    <div>
      <Typography gutterBottom variant="h5" align="center">
        Kontakt
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
            <Grid xs={12}item>
              <Button
                size="medium"
                variant="contained"
                type="submit"
                fullWidth
              >
                Wyslij
              </Button>
            
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
=======
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        HairCutime
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();


export const ContactPage = () => {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [toSend, setToSend] = React.useState({
    from_name: "",
    surname: "",
    reply_to: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(
      'service_scm8h2o',
        'template_yhoie6n',
        toSend,
        'NsZXsqZ0OGQf6kys6'
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
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
            Kontakt
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
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
                  placeholder="Twoje Imie"
                  
                  value={toSend.from_name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="surnameName"
                  label="Podaj Nazwisko"
                  placeholder="Twoje Nazwisko"
                  name="surname"
                  value={toSend.surname}
                  onChange={(event) => {
                    setSurname(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Podaj Email"
                  placeholder="Twój Email"
                  name="email"
                  value={toSend.reply_to}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="message"
                  label="Zadaj Pytanie!"
                  placeholder="Twoje Pytanie"
                  id="message"
                  multiline
                  rows={4}
                  value={toSend.message}
                  onChange={(event) => {
                    setMessage(event.target.value);
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
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/loginPage" variant="body2">
                  Posiadasz już konto? Zaloguj się!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
>>>>>>> Stashed changes
  );
};
export default ContactPage;
