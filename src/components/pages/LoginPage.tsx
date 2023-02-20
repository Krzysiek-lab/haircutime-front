import React, { useState } from "react";
import axios from "axios";
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

export default LoginPage;
