import React, { useState } from "react";
import axios from "axios";

const OverallStatsDeletion = () => {
  const [_id, setId] = useState("");
  const [message, setMessage] = useState("");

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `http://localhost:5001/api/overallStats/delete/${_id}`
      );
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Error deleting data");
    }
  };

  return (
    <div>
      <h2>Delete Data</h2>
      <form onSubmit={onDelete}>
        <label htmlFor="_id">ID:</label>
        <input
          type="text"
          id="_id"
          value={_id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OverallStatsDeletion;
