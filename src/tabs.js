/* eslint-disable no-use-before-define */
import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
// import ToggleBox from "./ToggleBox";
// import Vehicles from "./Vehicles";
// import icon from './test.png';
export default function ComboBox() {
  return (    
    <Container fixed>       
     <Box component="div" m={1}>
        <Paper>
          <Grid container>
            <Grid className="grid-pad" item>              
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
            </Grid>
          </Grid>
        </Paper>
      </Box>
          <Typography align="right" className="showing" component="h6">
              Showing 1 to 50 of 812 things
              </Typography>
    </Container>
    
  );
}

