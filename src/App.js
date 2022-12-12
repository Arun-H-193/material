import logo from './logo.svg';
import * as React from 'react';
import {Button} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Login';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Radio from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/RadioGroup"
import './App.css';


export function App() {
  
  return (
    <div className="App">
      
      <ButtonGroup variant="contained">
  <Button endIcon={<LoginIcon />} color="primary">
    Login
  </Button>
  <Button startIcon={<LogoutIcon />} color="secondary">
    Logout
  </Button>
</ButtonGroup>

    </div>
  );
}
export function radioButtongroups() {
  return (
<FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>

  );
}

export default App;
