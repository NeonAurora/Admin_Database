import axios from "axios";

const API_URL = "http://localhost:5001/api/transactions";

const addTransaction = async (transactionData) => {
  return axios.post(`${API_URL}/add`, transactionData);
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
