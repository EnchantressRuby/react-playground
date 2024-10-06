import { Container } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MuiInputElem = () => {
    return (
        <Container>
            <Box width={500} display="flex" justifyContent="center">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
        </Container>
    )
}

export default MuiInputElem