import React, { useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import UsersInsertion from "scenes/UsersInsertion";
import UsersDeletion from "scenes/UsersDeletion";
import UsersSearch from "scenes/UsersSearch";

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <Routes>
        <Route
          path="/"
          element={<div>Please Select a subpage from navbar</div>}
        />
        <Route path="insertion" element={<UsersInsertion />} />
        <Route path="search" element={<UsersSearch />} />
        <Route path="deletion" element={<UsersDeletion />} />
      </Routes>
    </div>
  );
};

export default Users;
