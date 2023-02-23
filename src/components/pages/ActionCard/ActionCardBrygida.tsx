import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

<<<<<<< Updated upstream
export const ActionCardBrygida=()=> {
=======
export const ActionCard=()=> {
>>>>>>> Stashed changes
    const clickHandler=useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
<<<<<<< Updated upstream
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
          alt="Brygida"
=======
          image='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt="Czesław"
>>>>>>> Stashed changes
        //  onClick={clickHandler}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Brygida Mocznik
          </Typography>
          <Typography variant="body2" color="text.secondary">
<<<<<<< Updated upstream
            Brygida zajmuję się strzyżeniem, modelowianiem i koloryzacją włosów już o 12 lat.
            Jest dobrze wykształcony i posiada odpowiednie umiejętności aby móc dostować fryzurę do indywidualnych potrzeb i preferencji klienta.
=======
           Brygida pomimo nie długiego stażu jako fryzjerka, wygrała juz kilka Europejskich konkursów.
           Specjalizuję się w fryzurach męskich.
>>>>>>> Stashed changes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

     
    
  );
}
<<<<<<< Updated upstream
export default ActionCardBrygida;
=======
export default ActionCard;
>>>>>>> Stashed changes
