import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(isNonMobile);

  return (
    <Box
      display="flex"
      flexDirection={isNonMobile ? "row" : "column"}
      width="100%"
      height="100%"
    >
      {isNonMobile || isSidebarOpen ? (
        <Sidebar
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      ) : null}
      <Box flexGrow={1} overflow="auto">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box padding={isNonMobile ? 3 : 1}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
