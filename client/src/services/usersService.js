import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL + "/api/users";

const addUser = async (data) => {
  return axios.post(`${API_URL}/add`, data);
};

const searchUser = async (userId) => {
  return axios.get(`${API_URL}/search/${userId}`);
};

const deleteUser = async (userId) => {
  return axios.delete(`${API_URL}/delete/${userId}`);
};

const updateUser = async (userId, updatedData) => {
  return axios.put(`${API_URL}/update/${userId}`, updatedData);
};


export default {
  addUser,
  searchUser,
  deleteUser,
  updateUser,
};
