import * as React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import levantamiento from '../assets/icons/levantamiento.svg';

import "./CardIcon.css";

export default function CardIcon() {
    return (
    <React.Fragment>
  
      <Box sx={{ minWidth: 275 }}>
      <CardMedia className='card-content'
          component="img"
          height="194"
          width="100"
          image={levantamiento}
          alt="Paella ssss"
        />
      </Box>
    </React.Fragment>
  
    );
  }