// import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { styled, Box, Stack } from '@mui/system';
import {
   
    TextField,
    Typography,
   Grid,
    MenuItem,
    Button,
    
  
  } from '@material-ui/core';
  import "./nav.css"
export const Home = () => {

    return (
        <Stack className='HomePage'
        flexDirection={"row"}>
           
        <NavLink to={'/HeadTail'} >
            <Typography
            variant="h5"
            >
            Go to  Head & Tail
            </Typography>
            
            </NavLink>
        <NavLink to={'/about'} >
            <Typography variant="h5">
            Go to About Page
            </Typography>
             
             </NavLink>
    </Stack>
    )
};