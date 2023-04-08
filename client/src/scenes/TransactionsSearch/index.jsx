import React, { useState } from "react";
import TransactionSearchForm from "components/TransactionSearchForm";
import transactionService from "services/transactionService";

const TransactionSearch = () => {
  const [transactionId, setTransactionId] = useState("");
  const [transactionData, setTransactionData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await transactionService.searchTransaction(
        transactionId
      );
      setTransactionData(response.data);
    } catch (error) {
      setTransactionData(null);
      setError("Error: Transaction not found");
    }
  };

  return (
    <div>
      <h1>Search Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the ID of the transaction you want to search for:
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>
        {error && <p>{error}</p>}
        {transactionData && (
          <TransactionSearchForm transactionData={transactionData} />
        )}
      </div>
    </div>
  );
};

export default TransactionSearch;
