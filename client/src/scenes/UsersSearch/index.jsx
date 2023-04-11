import React, { useState } from "react";
import UserSearchForm from "components/UserSearchForm";
import UserEditSearchForm from "components/UserEditForm";
import userService from "services/usersService";

const UserSearch = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await userService.searchUser(userId);
      const data = response.data;
      setUserData(data);
    } catch (error) {
      setUserData(null);
      setError("Error: User not found");
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleConfirm = async (updatedData) => {
    try {
      await userService.updateUser(userId, updatedData);
      setUserData(updatedData);
      setEditMode(false);
    } catch (error) {
      setError("Error: Failed to update the user");
    }
  };

  return (
    <div>
      <h1>Search User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the ID of the user you want to search for:
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        {error && <p>{error}</p>}
        {userData && !editMode && (
          <>
            <UserSearchForm userData={userData} />
            <button onClick={handleEdit}>Edit user</button>
          </>
        )}
        {userData && editMode && (
          <UserEditSearchForm userData={userData} onConfirm={handleConfirm} />
        )}
      </div>
    </div>
  );
};

export default UserSearch;
