import axios from 'axios';
import * as Keychain from 'react-native-keychain';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1', // Replace with your API base URL
  timeout: 1000,
  headers: {'Content-Type': 'application/json'},
}); // Create the axios instance

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async function (config) {
    // Do something before the request is sent
    // For example, add an authentication token to the headers

    const token = await Keychain.getGenericPassword();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Handle the error
    return Promise.reject(error);
  },
);
