import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // backend URL

export const signup = (data) => {
  return axios.post(`${API_URL}/signup`, data);
};

export const login = (data) => {
  return axios.post(`${API_URL}/login`, data);
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
