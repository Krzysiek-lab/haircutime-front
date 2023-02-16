import React, { useState } from "react";
import axios from "axios";
import { Button, TextField,Typography } from "@mui/material";
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
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Error>{error}</Error>}
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

const Title = styled("h1")({
  fontSize: "2rem",
});

const Error = styled("div")({
  color: "red",
  fontWeight: "bold",
});


export default LoginPage;
