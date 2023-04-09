import axios from "axios";

const API_URL = "http://localhost:5001/api/transactions";

const addTransaction = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(`${API_URL}/add`, formData, config);
};

const searchTransaction = async (transactionId) => {
  return axios.get(`${API_URL}/search/${transactionId}`);
};

const deleteTransaction = async (transactionId) => {
  return axios.delete(`${API_URL}/delete/${transactionId}`);
};

export default {
  addTransaction,
  searchTransaction,
  deleteTransaction,
};
