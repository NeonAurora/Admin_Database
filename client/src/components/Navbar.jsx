// Navbar.jsx
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "blue" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Navbar
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", width: "50%" }}>
          <Link
            to="/overallStats/insertion"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              Insertion
            </Typography>
          </Link>
          <Link
            to="/overallStats/search"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              Search
            </Typography>
          </Link>
          <Link
            to="/overallStats/deletion"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              Deletion
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
