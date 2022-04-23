import axios from "axios";

/**
 * Create an axios instance
 * @function
 * @params {object} baseURL: value
 */
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

export default axiosInstance;