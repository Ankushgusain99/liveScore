import MenuIcon  from "@mui/icons-material/Menu";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
const Navbar=()=>{
    return(
        <AppBar position="static" color="secondary">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                    
                </IconButton>
                <Typography>LiveScore</Typography>
                <Button color="inherit" sx={{
                    flexGrow: 1,
                    justifyContent: 'end'
                    }}>Login</Button>
            </Toolbar>
        </AppBar>

    )
};

export default Navbar;