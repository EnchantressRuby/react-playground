import { Container } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const MuiInputElem = () => {
    return (
        <Container>
            <Box width={500} display="flex" justifyContent="center" flexDirection={"column"}>
                <TextField type='email' id="outlined-basic" margin='dense' label="Outlined" variant="outlined" fullWidth />
                <TextField id="filled-basic" margin='dense' label="Filled" variant="filled" fullWidth />
                <TextField id="standard-basic" margin='dense' label="Standard" variant="standard" fullWidth />
            </Box>
            <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
        </Container>
    )
}

export default MuiInputElem