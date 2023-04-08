import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { label: "Overall Stats", path: "/overallStats" },
    { label: "Transactions", path: "/transactions" },
    // Add more pages here
  ];

  return (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button key={index} component={Link} to={item.path}>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
