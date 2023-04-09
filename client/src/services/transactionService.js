import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL + "/api/transactions";


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
  const transactionData = response.data;
  const audioUrl = transactionData.audioMetadata.fileUrl;
  return { transactionData, audioUrl };
};

const deleteTransaction = async (transactionId) => {
  return axios.delete(`${API_URL}/delete/${transactionId}`);
};

export default {
  addTransaction,
  searchTransaction,
  deleteTransaction,
};
