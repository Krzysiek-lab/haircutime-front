import ContentCutIcon from "@mui/icons-material/ContentCut";
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import CallEndIcon from '@mui/icons-material/CallEnd';
import InfoIcon from '@mui/icons-material/Info';
export const navbarItems=[
  {
    id:0,
    icon: <ContentCutIcon/>,
    label:'Strona Głowna',
    route:'mainPage',
  },
  {
    id:1,
    icon:<LoginIcon/>,
    label:'Zaloguj',
    route:'loginPage',
  },
  {
    id:2,
    icon:<AppRegistrationIcon/>,
    label:'Rejestracja',
    route:'registerPage',
  },
  {
    id:3,
    icon:<EventSeatIcon/>,
    label:'Rezerwuj',
    route:'reservationPage',
  },
  {
    id:4,
    icon:<CallEndIcon/>,
    label:'Kontakt',
    route:'contactPage',
  },
  {
    id:5,
    icon:<InfoIcon/>,
    label:'O Nas',
    route:'aboutUsPage',
  },
]