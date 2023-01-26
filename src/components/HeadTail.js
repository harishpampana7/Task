import React, { useState } from "react";
import { styled, Box, Stack } from "@mui/system";
import {
  TextField,
  Typography,
  Grid,
  MenuItem,
  Button,
} from "@material-ui/core";


const HeadTail = () => {
  const [open, setOpen] = useState([[]]);
  const [error, setError] = useState("");
  const [submitValue, setSubmitValue] = useState("");

const Hdata = ({ datavalue }) => {
    // console.log(datavalue)
    return <Box>{datavalue}</Box>;
  };

  const Tdata = ({ datavalue }) => {
    // console.log(datavalue,"test")
    return <Box>{datavalue}</Box>;
  };

  const Data = ({ columns }) => {
    // console.log(Data,"test");
    return (
      <Box style={{ display: "flex" }}>
        {columns.map((column, index) => {
            // console.log(cloumn,"test")
          return <Line key={index} keyvalue={column} />;
        })}
      </Box>
    );
  };
const Line = ({ keyvalue }) => {
    return (
      <Box>
        {keyvalue.map((element, index) => {
            // console.log(element,"test")
          return element.datavalue === "H" ? (
            <Hdata key={index} datavalue={element.datavalue} />
          ) : (
            <Tdata key={index} datavalue={element.datavalue} />
          );
        })}
      </Box>
    );
  };
//  submit button function
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!submitValue) {
      setError("select a value from the dropdown before Submit");
      return;
    }
    setError("");

    const correctvalue = { 
        id: Math.random(), 
        datavalue: submitValue
     };
    const box = [...open];
    if (
      box[box.length - 1].length &&
      box[box.length - 1][0].datavalue !== submitValue
    ) {
      box.push([correctvalue]);
    } 
    else {
      box[box.length - 1].push(correctvalue);
    }
    setOpen(box);
    setSubmitValue("");

  };


  return (
    <Stack style={{margin:"auto"}}>
 <Grid container>
        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={12}
          xs={12}
          style={{ margin: "auto" }}
        >
          <TextField
            id="status"
            label="Select a value"
            placeholder=" Select a vlaue"
            select
            variant="outlined"
            style={{ marginTop: "40px" }}
            required
            fullWidth
            value={submitValue}
            onChange={(e) => setSubmitValue(e.target.value)}
          >
            <MenuItem key={0} value={"H"}>
              {"H"}
            </MenuItem>
            <MenuItem key={1} value={"T"}>
              {"T"}
            </MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Button
        className="btn"
        
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Box className="mainstack">
      {error &&
       <Box>
        <Typography>

            {error}
        </Typography>
        </Box>
       }
       </Box>
       <Box style={{margin:"auto" ,marginTop:"30px"}}>
      <Data columns={open} />
      </Box>
    </Stack>
  );
};

export default HeadTail;