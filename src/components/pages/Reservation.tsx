import React, { useState } from "react";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
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
  const [barberId, setBarberId] = React.useState<number>(0);
  const [productid, setProductId] = React.useState<number>(0);

  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    dayjs("2023-02-20")
  );
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {

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
  );
};

export default ReservationForm;
