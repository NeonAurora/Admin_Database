import React, { useState } from "react";
import TransactionSearchForm from "components/TransactionSearchForm";
import TransactionEditForm from "components/TransactionEditForm";
import transactionService from "services/transactionService";

const TransactionSearch = () => {
  const [transactionId, setTransactionId] = useState("");
  const [transactionData, setTransactionData] = useState(null);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { transactionData, audioUrl } =
        await transactionService.searchTransaction(transactionId);
      setTransactionData({ ...transactionData, audioUrl });
      setEditMode(false);
    } catch (error) {
      setTransactionData(null);
      setError("Error: Transaction not found");
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async (audioFileInput) => {
    try {
      const updatedTransactionData = {
        userId: transactionData.userId,
        cost: transactionData.cost,
        products: transactionData.products,
      };

      // Update transaction data
      const response = await transactionService.updateTransaction(
        transactionId,
        updatedTransactionData
      );

      console.log("Response from updateTransaction API call:", response); // Add this line

      // Update audio file if a new file is selected
      if (transactionData.newAudioFile) {
        const formData = new FormData();
        formData.append("newAudio", transactionData.newAudioFile);
        const audioResponse = await transactionService.updateAudio(
          transactionId,
          formData
        );

        if (audioResponse.status === "success") {
          // Reload transaction data to show the updated audio file
          const { transactionData: updatedData, audioUrl } =
            await transactionService.searchTransaction(transactionId);
          setTransactionData({ ...updatedData, audioUrl });

          // Clear the input field for the audio file
          if (audioFileInput && audioFileInput.current) {
            audioFileInput.current.value = "";
          }
        } else {
          alert("Error updating audio file. Please try again.");
        }
      }

      if (response.message === "Transaction updated successfully") {
        // Updated this line
        alert("Transaction updated successfully!");
        console.log(`
        ............... ...............
        .....*****..... .**......**....
        ...**.....**... .**.....**.....
        ..**.......**.. .**....**......
        .**.........**. .**...**.......
        .**.........**. .*****.........
        .**.........**. .*****.........
        .**.........**. .**..**........
        .**.........**. .**...**.......
        .**.........**. .**....**......
        ..**.......**.. .**.....**.....
        ...**.....**... .**......**....
        .....*****..... .**.......**...
        ............... ...............

        `);
      } else {
        alert("Error updating transaction. Please try again.");
      }
    } catch (error) {
      console.error("Error updating transaction:", error); // Keep this line
      console.error("Error object:", error); // Add this line to log the error object itself
      alert("Error updating transaction. Please try again.");
    }
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const onInputChange = (key, value) => {
    setTransactionData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
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
        {transactionData && !editMode && (
          <TransactionSearchForm
            transactionData={transactionData}
            onEditClick={handleEditClick}
          />
        )}
        {transactionData && editMode && (
          <TransactionEditForm
            transactionData={transactionData}
            onSaveClick={handleSaveClick}
            onCancelClick={handleCancelClick}
            onInputChange={onInputChange}
          />
        )}
      </div>
    </div>
  );
};

export default TransactionSearch;
