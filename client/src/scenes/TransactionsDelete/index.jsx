import React, { useState } from "react";
import transactionService from "services/transactionService";

const TransactionsDelete = () => {
  const [transactionId, setTransactionId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await transactionService.deleteTransaction(transactionId);
      setMessage("Transaction successfully deleted.");
    } catch (error) {
      setMessage("Error: Failed to delete transaction.");
    }
  };

  return (
    <div>
      <h1>Delete Transaction</h1>
      <form onSubmit={handleDelete}>
        <label>
          Enter the ID of the transaction you want to delete:
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
        </label>
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TransactionsDelete;
