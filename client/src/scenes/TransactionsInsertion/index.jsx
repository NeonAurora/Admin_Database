import React, { useState } from "react";
import transactionService from "services/transactionService";

const TransactionsInsertion = () => {
  const [transactionData, setTransactionData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await transactionService.addTransaction(transactionData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Add your form here and call handleSubmit when the form is submitted */}
    </div>
  );
};

export default TransactionsInsertion;
