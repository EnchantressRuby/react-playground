import { Container, IconButton } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const MuiInputElem = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

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
            <TextField
                id="input-with-icon-textfield"
                label="TextField"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    },
                }}

                //? deprecated
                // inputProps={{ 
                //     startAdornment: (
                //         <InputAdornment position="start">
                //           <AccountCircle />
                //         </InputAdornment>
                //       ),
                // }}

                variant="standard"
            />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standart">
          <InputLabel htmlFor="standart-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Container>
    )
}

export default MuiInputElem