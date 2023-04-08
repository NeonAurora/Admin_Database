import React from "react";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box display="flex">
        <Sidebar />
        <Box flexGrow={1} p={2}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
