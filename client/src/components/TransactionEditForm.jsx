import React, { useRef } from "react";

const TransactionEditForm = ({
  transactionData,
  onInputChange,
  onSaveClick,
  onCancelClick,
}) => {
  const handleFieldChange = (event, key) => {
    onInputChange(key, event.target.value);
  };
  const handleFileInputChange = (event) => {
    console.log("File input change event:", event);
    onInputChange("newAudioFile", event.target.files[0]);
  };
  const audioFileInput = useRef(null);

  return (
    <div>
      <h2>Transaction Details</h2>
      <label>
        _id:
        <input type="text" value={transactionData._id} readOnly />
      </label>
      <label>
        User ID:
        <input
          type="text"
          value={transactionData.userId}
          onChange={(e) => handleFieldChange(e, "userId")}
        />
      </label>
      <label>
        Cost:
        <input
          type="text"
          value={transactionData.cost}
          onChange={(e) => handleFieldChange(e, "cost")}
        />
      </label>
      <h3>Products:</h3>
      {transactionData.products &&
        transactionData.products.map((product, index) => (
          <label key={index}>
            Product {index + 1}:
            <input
              type="text"
              value={product.productID}
              onChange={(e) =>
                handleFieldChange(e, "products", index, "productID")
              }
            />
          </label>
        ))}

      <label>
        Created At:
        <input type="text" value={transactionData.createdAt} readOnly />
      </label>
      <label>
        __v:
        <input type="text" value={transactionData.__v} readOnly />
      </label>
      {transactionData.audioUrl && (
        <audio controls src={transactionData.audioUrl} />
      )}
      {transactionData.audioUrl && (
        <div>
          <audio controls src={transactionData.audioUrl} />
          <div>
            <input
              ref={audioFileInput}
              type="file"
              accept="audio/*"
              onChange={handleFileInputChange}
            />
          </div>
        </div>
      )}
      <div>
        <button onClick={onSaveClick}>Confirm</button>
        <button onClick={onCancelClick}>Cancel</button>
      </div>
    </div>
  );
};

export default TransactionEditForm;
