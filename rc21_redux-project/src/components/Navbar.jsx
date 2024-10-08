import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../features/permissionSlice';

const Navbar = () => {

  const { email } = useSelector((state) => state.permissionSlice)

  const dispatch = useDispatch()

  const signOut = () => {

    dispatch(deleteUser())

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Kovach News
          </Typography>

          {email ? (
            <Button color="inherit" onClick={signOut}>
              LogOut
            </Button>
          ) : (
            <Button color="inherit">LogIn</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar