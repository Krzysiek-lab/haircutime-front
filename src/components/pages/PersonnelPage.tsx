import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

interface Availability {
  morning: boolean;
  afternoon: boolean;
  evening: boolean;
}

const PersonnelPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [availability, setAvailability] = useState<Availability>({
    morning: false,
    afternoon: false,
    evening: false,
  });

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleAvailabilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    setAvailability({ ...availability, [name]: checked });
  };

  const handleSubmit = () => {
    axios
      .post('https//localhost:8080/personnelAvailabilty', { date: selectedDate, availability })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Calendar value={selectedDate} onClickDay={handleDateClick} />
      <h2>Availability for {selectedDate.toLocaleDateString()}</h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="morning"
            checked={availability.morning}
            onChange={handleAvailabilityChange}
          />
          Morning (9am - 12pm)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="afternoon"
            checked={availability.afternoon}
            onChange={handleAvailabilityChange}
          />
          Afternoon (12pm - 5pm)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="evening"
            checked={availability.evening}
            onChange={handleAvailabilityChange}
          />
          Evening (5pm - 9pm)
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PersonnelPage;
