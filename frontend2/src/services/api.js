import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/users/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API_URL}/users/login`, userData);
};

export const fetchPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

// Add other API calls as needed
