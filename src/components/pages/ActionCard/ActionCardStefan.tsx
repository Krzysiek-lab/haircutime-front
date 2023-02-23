<<<<<<< Updated upstream
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ActionCardStefan = () => {
  const clickHandler = useNavigate();
=======
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ActionCard=()=> {
    const clickHandler=useNavigate();
>>>>>>> Stashed changes
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
<<<<<<< Updated upstream
          image="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Stefan"
          //  onClick={clickHandler}
=======
          image="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
          alt="Czesław"
        //  onClick={clickHandler}
>>>>>>> Stashed changes
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stefan Jajecznica
          </Typography>
          <Typography variant="body2" color="text.secondary">
<<<<<<< Updated upstream
            Stefan zajmuję się strzyżeniem, modelowianiem i koloryzacją włosów
            już o 12 lat. Jest dobrze wykształcony i posiada odpowiednie
            umiejętności aby móc dostować fryzurę do indywidualnych potrzeb i
            preferencji klienta.
=======
            Stefan nie ma sobie równych jeśli chodzi układanie fryzur.  Obok strzyżenia i układania włosów, Stefan zajmuje się także wszelkimi rodzajami koloryzacji włosów - farbowaniem, rozjaśnianiem, tworzeniem pasemek, balejażem, dekoloryzacją.
>>>>>>> Stashed changes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
<<<<<<< Updated upstream
  );
};
export default ActionCardStefan;
=======

     
    
  );
}
export default ActionCard;
>>>>>>> Stashed changes
