/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './App.css';
import Container from '@material-ui/core/Container';
export default function ComboBox() {
  return (    
    <Container fixed>
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={option => option.title}
      style={{ width: 170 }}
      renderInput={params => (
        <TextField {...params} label="Combo box" variant="outlined" width="100%" />
      )}
    />
    <TextField
     id="outlined-basic"
     label="Outlined"
     style={{ width: 300}}
     variant="outlined"
     className="textfield" />     
    </Container>    
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
];