import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL + "/api/overallStats";

const addOverallStat = async (data) => {
  return axios.post(`${API_URL}/add`, data);
};

const searchOverallStat = async (documentId) => {
  return axios.get(`${API_URL}/search/${documentId}`);
};

const deleteOverallStat = async (documentId) => {
  return axios.delete(`${API_URL}/delete/${documentId}`);
};

const updateOverallStat = async (documentId, updatedData) => {
  return axios.put(`${API_URL}/update/${documentId}`, updatedData);
};


export default {
  addOverallStat,
  searchOverallStat,
  deleteOverallStat,
  updateOverallStat
};
