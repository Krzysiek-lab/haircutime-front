import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CommonButton from "./common/CommonButton";

export const Contact = () => {
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        Kontakt
      </Typography>
      <Card>
        <CardContent>
          <form>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Twoje Imie"
                placeholder="Podaj imie"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Twoje Nazwisko"
                placeholder="Podaj nazwisko"
                fullWidth
                required
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                type="Email"
                label="Twoje Email"
                placeholder="Podaj email"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                type="Number"
                label="Twoje numer telefonu"
                placeholder="Podaj numer telefonu"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="Message"
                multiline
                rows={4}
                label="Twoja wiadomosc"
                placeholder="Zadaj swoje pytanie"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={6} md={8}item>
              <CommonButton
                size="medium"
                variant="contained"
                type="submit"
                fullWidth
              >
                Wyslij
              </CommonButton>
              {/* //<Button variant="contained">Wyslij</Button> */}
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
