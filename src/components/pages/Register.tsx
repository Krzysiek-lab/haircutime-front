import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";
import Logo from"../pages/images/Logo.png"
function Copyright(props: any) {
  return (
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
export const Register = () => {
  const registerUrl = "http://localhost:8080/user/create";
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState({
    name: "",
    surname: "",
    login: "",
    password: "",
    email: "",
    phoneNumber: "",
  });
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await axios
      .post(registerUrl, {
        name: name,
        surname: surname,
        login: login,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
      })
      .then((responseJson) => {
        console.log(responseJson.data);
      })
      .catch((res) => {
        return setError({
          name: res.response.data.message.filter((e: string | string[]) =>
            e.includes("Name")
          ),
          surname: res.response.data.message.filter((e: string | string[]) =>
            e.includes("Surname")
          ),
          email: res.response.data.message.filter((e: string | string[]) =>
            e.includes("Email")
          ),
          login: res.response.data.message.filter((e: string | string[]) =>
            e.includes("Login")
          ),
          password: res.response.data.message.filter((e: string | string[]) =>
            e.includes("Password")
          ),
          phoneNumber: res.response.data.message.filter(
            (e: string | string[]) => e.includes("Phone")
          ),
        });
      });
  }
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
            Rejestracja
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
                  placeholder="Twoje imie"
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
                  id="surnameName"
                  label="Podaj Nazwisko"
                  placeholder="Twoje Nazwisko"
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
                  id="email"
                  label="Podaj Email"
                  placeholder="Twój Email"
                  name="email"
                  value={email}
                  helperText={error.email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="login"
                  label="Podaj Login"
                  placeholder="Twój Login"
                  type="login"
                  id="login"
                  value={login}
                  helperText={error.login}
                  onChange={(event) => {
                    setLogin(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Podaj Hasło"
                  placeholder="Twoje Hasło"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  helperText={error.password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Podaj Numer Telefonu"
                  placeholder="Twój Numer Telefonu"
                  type="phone"
                  id="phone"
                  value={phoneNumber}
                  helperText={error.phoneNumber}
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
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
              Zarejestruj się
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  Posiadasz już konto? Zaloguj się!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
