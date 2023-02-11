import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export const Calendar = (props: any) => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    dayjs("2023-02-05")
  );
  props.onSelectedDate(selectedDate);

  return (
    <div className="calendar-container">
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
    </div>
  );
};
export default Calendar;
