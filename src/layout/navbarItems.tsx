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
    route:'login',
  },
  {
    id:2,
    icon:<AppRegistrationIcon/>,
    label:'Rejestracja',
    route:'register',
  },
  {
    id:3,
    icon:<EventSeatIcon/>,
    label:'Rezerwuj',
    route:'reservation',
  },
  {
    id:4,
    icon:<CallEndIcon/>,
    label:'Kontakt',
    route:'contact',
  },
  {
    id:5,
    icon:<InfoIcon/>,
    label:'O Nas',
    route:'aboutUs',
  },
]