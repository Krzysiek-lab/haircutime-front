import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const Register: React.FC = () => {
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber:"",
    password: "",
    confirmPassword: "",
  });
  const isPasswordValid = () => {
    return formData.password && formData.password === formData.confirmPassword;
  };
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const isFormValid=()=>{
    return(
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      isPasswordValid()
    );
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(isFormValid()){
    axios
      .post("/api/register", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        Rejestacja
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                 required
                 id="firstName"
                 name="firstName"
                 label="Podaj Imie"
                 placeholder="Twoje Imie"
                 value={formData.firstName}
                 onChange={handleFormChange}
                 fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                   required
                   id="lastName"
                   name="lastName"
                   label="Podaj Nazwisko"
                   placeholder="Twoje Nazwisko"
                   value={formData.lastName}
                   onChange={handleFormChange}
                   fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                 required
                 id="email"
                 name="email"
                 label="Podaj Email"
                 placeholder="Twoj Email"
                 type="email"
                 value={formData.email}
                 onChange={handleFormChange}
                 fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                   required
                   id="phoneNumber"
                   name="phoneNumber"
                   label="Podaj Numer Telefonu"
                   placeholder="Twój Numer Telefonu"
                   type="tel"
                   value={formData.phoneNumber}
                   onChange={handleFormChange}
                   fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                   required
                   id="password"
                   name="password"
                   label="Podaj Hasło"
                   placeholder="********"
                   type="password"
                   value={formData.password}
                   onChange={handleFormChange}
                   fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  required
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Powtórz Hasło"
                  placeholder="********"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleFormChange}
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  size="small"
                  variant="contained"
                  type="submit"
                  fullWidth
                  disabled={!isFormValid()}
                >
                  Wyslij
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
