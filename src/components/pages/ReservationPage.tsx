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
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { FormControl, InputLabel, MenuItem, NativeSelect, Select } from "@mui/material";
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

  
  const [barberId, setBarberId] = React.useState<number| string>(0);
  const [productId, setProductId] = React.useState<number | string>(0);
  const [date, setDate] = React.useState<Dayjs | null>(
    dayjs("2023-02-20 12:00:11")
  );
  const [product,setProduct]=React.useState<Product[]>([]);
  const [barbers, setBarbers] = useState<Barber[]>([]);
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
  
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reservationData = {
      date,
      productId,
      userId:1,
      serviceLength:productId,
      time:dayjs(date).hour() + ":" + dayjs(date).minute() +":" + dayjs(date).second()
    };
  
      const response = await axios.post("http://localhost:8080/appointment/create",reservationData
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      }); 
    
  };
  interface Barber {
    id: number;
    name: string;
    surname: string;
  }
  interface Product{
    id:number;
    productName:string;
  }
  
  const loadBarbers =async()=>{
    await axios.get<Barber[]>("http://localhost:8080/barber/get")
    .then((response) => setBarbers(response.data))
    .catch((error) => console.log(error));
  }
  const loadProducts=async()=>{
    await axios.get<Product[]>("http://localhost:8080/product/get")
    .then((result) => setProduct(result.data))
    .catch((error) => console.log(error))
  }
  
    React.useEffect(() => {
      loadBarbers()},
       []);

       React.useEffect(() => {
        loadProducts()},
         []);


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
                  <Select
                    id="barber-select"
                    value={barberId}
                    onChange={(event) =>
                      setBarberId(event.target.value)
                    }
                  >
                    {barbers.map((barber) => (
                      <MenuItem key={barber.id} value={barber.id}>
                        {barber.name}
                        {" " + barber.surname}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Grid item xs={12} justifyContent="center">
                <Typography>Wybierz usługę:</Typography>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <InputLabel htmlFor="product-select">Dostępne:</InputLabel>
                  <Select
                    id="product-select"
                    value={productId}
                    onChange={(event) =>
                      setProductId(event.target.value)
                    }
                  >
                    {product.map((product) => (
                      <MenuItem key={product.id} value={product.id}>
                        {product.productName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              </Grid>
              <Grid xs={12} item justifyContent="flex-end">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Wybierz termin"
                    value={date}
                    //format="YYYY-MM-DD h:mm A"
                    onChange={(newValue) => {
                      setDate(newValue);
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
  );
};

export default ReservationPage;

