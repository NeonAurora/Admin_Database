import axios from "axios";

const API_URL = "http://localhost:5001/api/overallStats";

const addOverallStat = async (data) => {
  return axios.post(`${API_URL}/add`, data);
};

const searchOverallStat = async (documentId) => {
  return axios.get(`${API_URL}/search/${documentId}`);
};

const deleteOverallStat = async (documentId) => {
  return axios.delete(`${API_URL}/delete/${documentId}`);
};

export default {
  addOverallStat,
  searchOverallStat,
  deleteOverallStat,
};
