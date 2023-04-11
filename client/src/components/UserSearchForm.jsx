import React from "react";

const UserSearchForm = ({ userData }) => {
  return (
    <form>
      {Object.entries(userData).map(([key, value]) => {
        if (key === "_id") {
          return null;
        } else {
          return (
            <label key={key}>
              {key}:
              <input type="text" name={key} value={value} readOnly />
            </label>
          );
        }
      })}
    </form>
  );
};

export default UserSearchForm;
