import { Box, CssBaseline, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Image1 from "../pages/images/heros_img1_1.jpg"
import Image2 from "../pages/images/heros_img2_2.jpg"
import Image3 from "../pages/images/heros_img3_3.jpg"

export const Heros = () => {

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
<h4>1</h4>
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
2
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
3
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