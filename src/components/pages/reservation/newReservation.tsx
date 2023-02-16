import React, { useState, useEffect } from "react";
import axios from "axios";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField } from "@mui/material";

interface Service {
  id: number;
  name: string;
}

interface Barber {
  id: number;
  name: string;
}

interface Reservation {
  date: Date;
  serviceId: number;
  barberId: number;
}

const ReservationPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [barbers, setBarbers] = useState<Barber[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<number>();
  const [selectedBarberId, setSelectedBarberId] = useState<number>();
  const [reservationSubmitted, setReservationSubmitted] =
    useState<boolean>(false);

  useEffect(() => {
    axios
      .get("/api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("/api/barbers")
      .then((response) => {
        setBarbers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedServiceId(Number(event.target.value));
  };

  const handleBarberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBarberId(Number(event.target.value));
  };

  const handleSubmit = () => {
    if (!selectedDate || !selectedServiceId || !selectedBarberId) {
      console.error("Invalid reservation information");
      return;
    }

    const reservation: Reservation = {
      date: selectedDate,
      serviceId: selectedServiceId!,
      barberId: selectedBarberId!,
    };

    axios
      .post("/api/reservations", reservation)
      .then((response) => {
        console.log(response);
        setReservationSubmitted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Make a Reservation</h1>
      {reservationSubmitted ? (
        <p>Reservation submitted successfully!</p>
      ) : (
        <>
          <div>
            <label htmlFor="date">Select a date and time:</label>
            <br />
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Wybierz termin"
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
            />
          </div>
          <div>
            <label htmlFor="service">Select a service:</label>
            <br />
            <select id="service" onChange={handleServiceChange}>
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="barber">Select a barber:</label>
            <br />
            <select id="barber" onChange={handleBarberChange}>
              <option value="">Select a barber</option>
              {barbers.map((barber) => (
                <option key={barber.id} value={barber.id}>
                  {barber.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              disabled={
                !selectedDate || !selectedServiceId || !selectedBarberId
              }
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ReservationPage;
