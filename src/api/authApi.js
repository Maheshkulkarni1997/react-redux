import axios from 'axios';

const API_URL = 'http://localhost:8082/api/v1';

const authApi = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to automatically attach token
authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default authApi;
