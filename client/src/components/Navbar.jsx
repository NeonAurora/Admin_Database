import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "blue" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Navbar
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", width: "50%" }}>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Link 1
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Link 2
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Link 3
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
