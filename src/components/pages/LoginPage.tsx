import axios from "axios";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from"../pages/images/Logo.png"
import { ThemeProvider } from "@emotion/react";
import { createTheme, Typography, Grid, CssBaseline, Paper, Box, Avatar, TextField, Button } from "@mui/material";

//import { signIn } from "../../services/authService";

const theme = createTheme();
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to={""}>
        HairCutime
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:8080/login", {
        email: email,
        password: password,
      });
      // handle successful login here
    } catch (error) {
      setError("Invalid email or password.");
    }
    //  signIn(navigate, data.get("email"), data.get("password"));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random/?barber)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} src={Logo} />
            <Typography component="h1" variant="h5">
              Logowanie
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="login"
                label="Podaj Login"
                placeholder="Twój Login"
                name="login"
                autoComplete="login"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Podaj Hasło"
                placeholder="Twoje Hasło"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Zaloguj się
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to={""}>
                    Zapomniałeś Hasła?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    // component="button"
                    onClick={() => navigate("registerPage")} to={""}                  >
                    {"Nie masz jeszcze, konta stwórz je tutaj!"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginPage;
