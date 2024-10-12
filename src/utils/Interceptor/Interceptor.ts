import axios from 'axios';

// import custom token hook
import useAuthToken from '../../hooks/useAuthToken';

// Create an Axios instance
const apiInstance = axios.create({
  baseURL: 'http://ec2-13-201-78-105.ap-south-1.compute.amazonaws.com:3000/api/v1', // Your base API URL
  timeout: 10000, // Timeout for requests
});

// Request Interceptor
apiInstance.interceptors.request.use(
  async config => {
    // Modify request before it is sent (e.g., add authorization token)
    const {getToken} = useAuthToken(); // Using the custom hook
    const token = await getToken(); // Assume getToken fetches token from storage

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    // Handle request errors
    return Promise.reject(error);
  },
);

// Response Interceptor
apiInstance.interceptors.response.use(
  response => {
    // Handle response data
    return response;
  },
  error => {
    // Handle errors globally (e.g., handle 401 unauthorized error)
    if (error.response && error.response.status === 401) {
      // You can handle the error globally here, like logging the user out
      console.log('Unauthorized - logging out');
      // Logout logic or token refresh logic can go here
    }
    return Promise.reject(error);
  },
);

export default apiInstance;