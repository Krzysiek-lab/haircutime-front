import React, { useState } from "react";
import axios from "axios";
<<<<<<< Updated upstream
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface LoginProps {}

const LoginPage: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
=======
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Logo from"../images/Logo.png"

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
      <Link color="inherit" href="#">
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
>>>>>>> Stashed changes

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
<<<<<<< Updated upstream
      const response = await axios.post("https://localhost:8080/login", {
        email: email,
        password: password,
=======
      const response = await axios.post("api/login", {
        email: data.get("email"),
        password: data.get("password"),
>>>>>>> Stashed changes
      });
      // handle successful login here
    } catch (error) {
      setError("Invalid email or password.");
    }
<<<<<<< Updated upstream
  };

  return (
    <Wrapper>
      <Typography gutterBottom variant="h4" align="center">
        Login
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Podaj Email"
                  placeholder="Twoj Email"
                  variant="outlined"
                  value={email}
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Podaj Hasło"
                  placeholder="Twoje Hasło"
                  variant="outlined"
                  type="password"
                  value={password}
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              {error && <Error>{error}</Error>}
              <Button variant="contained" fullWidth type="submit">
                Login
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});


const Error = styled("div")({
  color: "red",
  fontWeight: "bold",
});

=======
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
              Sign in
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
                id="email"
                label="Podaj Email"
                placeholder="Twój Email"
                name="email"
                autoComplete="email"
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
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Zapomniałeś Hasła?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => navigate("registerPage")}
                  >
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

>>>>>>> Stashed changes
export default LoginPage;
