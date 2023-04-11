import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";
const API_URL = `${API_BASE_URL}/api/transactions`;

const addTransaction = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(`${API_URL}/add`, formData, config);
};

const searchTransaction = async (transactionId) => {
  const response = await axios.get(`${API_URL}/search/${transactionId}`);
  const transactionData = response.data.transactionData;
  const audioUrl = response.data.audioUrl;
  return { transactionData, audioUrl };
};

const updateTransaction = async (transactionId, updatedTransactionData) => {
  const response = await axios.put(
    `${API_URL}/update/${transactionId}`,
    updatedTransactionData
  );
  return response.data;
};

const deleteTransaction = async (transactionId) => {
  return axios.delete(`${API_URL}/delete/${transactionId}`);
};

async function updateAudio(transactionId, formData) {
  console.log(
    "Updating audio for transactionId:",
    transactionId,
    "formData:",
    formData
  );
  try {
    const response = await axios.put(
      `${API_URL}/update-audio/${transactionId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Response from updateAudio API call:", response);
    return { status: "success", message: response.data.message };
  } catch (error) {
    console.error("Error updating audio:", error);
    return { status: "error", message: error.response.data.message };
  }
}

export default {
  addTransaction,
  searchTransaction,
  updateTransaction,
  deleteTransaction,
  updateAudio,
};
