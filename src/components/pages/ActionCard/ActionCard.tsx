import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ActionCard=()=> {
    const clickHandler=useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
          alt="Czesław"
        //  onClick={clickHandler}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Czesiek Czapka
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Czesław zajmuję się strzyżeniem, modelowianiem i koloryzacją włosów już o 12 lat.
            Jest dobrze wykształcony i posiada odpowiednie umiejętności aby móc dostować fryzurę do indywidualnych potrzeb i preferencji klienta.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

     
    
  );
}
export default ActionCard;