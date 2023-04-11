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

const deleteTransaction = async (transactionId) => {
  return axios.delete(`${API_URL}/delete/${transactionId}`);
};


export default {
  addTransaction,
  searchTransaction,
  deleteTransaction,
};
