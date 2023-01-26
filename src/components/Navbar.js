import { Link } from "react-router-dom"
import { styled, Box, Stack } from '@mui/system';
import {
   
    TextField,
    Typography,
   Grid,
    MenuItem,
    Button,
    
  
  } from '@material-ui/core';
  import "./nav.css"
export const Navbar = () => {
    return (
        <Stack style={{flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:"40px"

        }}>
         <Stack 
         className="area"
         >   
          <Link to="/" 
          style={{ margin:"10px" }}
          >
            <Typography
            className="text"
           
            >Home</Typography>
            
            </Link>
          </Stack>
          <Stack  className="area">
          <Link to="/about" style={{ margin:"10px" }}>
          <Typography
            className="text"
           
            >About</Typography>
            
            </Link>

          </Stack>
          <Stack  className="area">
          <Link to="/headtail" style={{ margin:"10px" }}>
          <Typography
            className="text"
           
            >Head & Tail
            </Typography>
            </Link>

          </Stack>
            
        </Stack>
    )
}