import React from "react";

const TransactionSearchForm = ({ transactionData }) => {
  const { _id, userId, cost, products, createdAt, __v } = transactionData;

  return (
    <div>
      <h2>Transaction Details</h2>
      <label>
        _id:
        <input type="text" value={_id} readOnly />
      </label>
      <label>
        User ID:
        <input type="text" value={userId} readOnly />
      </label>
      <label>
        Cost:
        <input type="text" value={cost} readOnly />
      </label>
      <h3>Products:</h3>
      {products.map((product, index) => (
        <label key={index}>
          Product {index + 1}:
          <input type="text" value={product} readOnly />
        </label>
      ))}
      <label>
        Created At:
        <input type="text" value={createdAt} readOnly />
      </label>
      <label>
        __v:
        <input type="text" value={__v} readOnly />
      </label>
    </div>
  );
};

export default TransactionSearchForm;
