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
import Logo from "../images/Logo.png";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
<<<<<<< Updated upstream
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const ReservationForm: React.FC = () => {
  const [formData,setFormData]=useState({
    barberId:"",
    selectedDate:"",
    productid:"",
  })
=======
import { FormControl, InputLabel, MenuItem, NativeSelect } from "@mui/material";
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
const ReservationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    barberId: "",
    selectedDate: "",
    productid: "",
  });
>>>>>>> Stashed changes
  const [barberId, setBarberId] = React.useState<number>(0);
  const [productid, setProductId] = React.useState<number>(0);
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    dayjs("2023-02-20")
  );
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< Updated upstream
=======
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reservationData = {
      barberId,
      selectedDate,
      productid,
      name,
      surname,
      email,
      phoneNumber,
    };
>>>>>>> Stashed changes

        setFormData({
          ...formData,[event.target.name]:event.target.value,
        });
    }
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
    // const reservationData = {
    //   barberId,
    //   selectedDate,
    //   productid,
    // };
    
      const response = await axios.post("/api/reservation", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      }); 
    
  };

  return (
<<<<<<< Updated upstream
    <div>
      <Typography gutterBottom variant="h4" align="center">
        Rezerwacja Terminu
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
           
            <Grid xs={4} sm={6} item>
              Barber:
              <select
                value={barberId}
                onChange={(e) => setBarberId(parseInt(e.target.value))}
              >
                <option value={1}>Czesiek Czapka</option>
                <option value={2}>Stefan Jajecznica</option>
                <option value={3}>Brygida Mocznik</option>
              </select>
            </Grid>
            <Grid xs={4} sm={6} item>
              Wybierz usługę:
              <select
                value={productid}
                onChange={(e) => setProductId(parseInt(e.target.value))}
              >
                <option value={1}>Strzyżenie Męskie</option>
                <option value={2}>Strzyżenie Damskie</option>
                <option value={3}>Hot Towel</option>
              </select>
            </Grid>
            <Grid xs={4} sm={8} item>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Wybierz termin"
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12} item>
                <Button
                  size="small"
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
            Rezerwacja
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
                  placeholder="Twoje Imie"
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
                  name="phoneNumber"
                  label="Podaj Numer Telefonu"
                  placeholder="Twoj Numer Telefonu"
                  type="phone"
                  id="phone"
                  value={phoneNumber}
                  helperText={error.phoneNumber}
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} justifyContent="center">
                <Typography>Wybierz Fryzjera:</Typography>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <InputLabel htmlFor="barber-select">Dostępni:</InputLabel>
                  <NativeSelect
                    id="barber-select"
                    value={barberId}
                    onChange={(event) =>
                      setBarberId(parseInt(event.target.value))
                    }
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>Czesiek Czapka</option>
                    <option value={2}>Stefan Jajecznica</option>
                    <option value={3}>Brygida Mocznik</option>
                  </NativeSelect>
                </FormControl>
                <Grid item xs={12}>
                  <Typography>Wybierz Fryzjera:</Typography>
                  <FormControl sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="product-select">Dostępni:</InputLabel>
                    <NativeSelect
                      id="product-select"
                      value={productid}
                      onChange={(event) =>
                        setProductId(parseInt(event.target.value))
                      }
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>Strzyżenie Męskie</option>
                      <option value={2}>Strzyżenie Damskie</option>
                      <option value={3}>Hot Towel</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid xs={12} item justifyContent="flex-end">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Wybierz termin"
                    value={selectedDate}
                    onChange={(newValue) => {
                      setSelectedDate(newValue);
                    }}
                  />
                </LocalizationProvider>
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
>>>>>>> Stashed changes
  );
};
export default ReservationPage;
