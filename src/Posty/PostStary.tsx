import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Share, Favorite, FavoriteBorder } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";

export const PostStary = () => {
  return (
    <Box flex={4} p={2}>
      <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ color: "red" }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Stefan Jajecznica - Darmowe strzyżenie !"
          subheader="Dec 19, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Tylko dzisiaj darmowe strzyżenie !
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}
