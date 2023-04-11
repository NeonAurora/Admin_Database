import React from "react";

const TransactionSearchForm = ({ transactionData, onEditClick }) => {
  const { _id, userId, cost, products, createdAt, __v, audioUrl } =
    transactionData;

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
      {products &&
        products.map((product, index) => (
          <label key={index}>
            Product {index + 1}:
            <input type="text" value={product.productID} readOnly />
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
      {audioUrl && <audio controls src={audioUrl} />}

      <button type="button" onClick={onEditClick}>
        Edit
      </button>
    </div>
  );
};

export default TransactionSearchForm;
