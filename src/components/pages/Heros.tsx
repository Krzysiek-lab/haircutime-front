import { Box, Button, CssBaseline, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useNavigate } from "react-router-dom"
import Image1 from "../pages/images/heros_img1_1.jpg"
import Image2 from "../pages/images/heros_img2_2.jpg"
import Image3 from "../pages/images/heros_img3_3.jpg"

export const Heros = () => {

    const navigate = useNavigate();

return(
<Container sx={{
    marginLeft:15
}}>
    <Box>
    <Box sx={{

justifyContent:"center",
width:450,
height:300,
display:"inline-flex",
alignItems:"center"
    }}>
<Typography align="justify" variant="subtitle1"
sx={{
    margin:5
}}
>Chcesz mieć swoje wizyty u fryzjera pod kontrolą? Masz ulubionego fryzjera, ale nie zawsze wiesz kiedy będzie w zakładzie? 
Dołącz do <b>HairCuTime</b> już dziś, a rozwiąże to Twoje problemy!
<Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, marginLeft:13}}
                onClick={() => navigate("/RegisterPage")}
              >
                Załóż konto
              </Button>
</Typography>

    </Box>
    <Box sx={{
backgroundImage: `url(${Image2})`,
justifyContent:"center",
width:450,
height:300,
alignItems:"center",
display:"inline-flex",
border:"solid",
borderRadius:"16px",
boxShadow:"10px 5px 5px gray",
    }}>
        .
    </Box>
    </Box>
    <Box>
    <Box sx={{
justifyContent:"center",
width:450,
height:300,
alignItems:"center",
display:"inline-flex",
backgroundImage: `url(${Image1})`,
border:"solid",
borderRadius:"16px",
boxShadow:"10px 5px 5px gray",
    }}>
.
    </Box>
    <Box sx={{

justifyContent:"center",
width:450,
height:300,
alignItems:"center",
display:"inline-flex"

    }}>
<Typography align="justify" variant="subtitle1"
sx={{
    margin:5
}}
>Jesteśmy firmą stawiającą przede wszystkim na jakość usług. 
Nasi pracownicy posiadają wieloletnie doświadczenie i ciągle podnoszą swoje kwalifikacje.
 Używamy wysokiej jakości kosmetyków i zapewniamy, że poczują się państwo komfortowo.</Typography>
    </Box>
    </Box>
    <Box>
    <Box sx={{
justifyContent:"center",
width:450,
height:300,
alignItems:"center",
display:"inline-flex"
    }}>
<Typography align="justify" variant="subtitle1"
sx={{
    margin:5,
    alignContent:"center"
}}
>Masz jakieś pytania lub wątpilowści? Śmiało napisz do nas. Jesteśmy do Twojej dyspozycji.
<Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2,marginLeft:15
                }}
                onClick={() => navigate("/contactPage")}
              >
                Kontakt
              </Button>
</Typography>
    </Box>
    <Box sx={{
backgroundImage: `url(${Image3})`,
justifyContent:"center",
width:450,
height:300,
alignItems:"center",
display:"inline-flex",
border:"solid",
borderRadius:"16px",
boxShadow:"10px 5px 5px gray",
    }}>
.
    </Box>
    </Box>
</Container>
    )
}