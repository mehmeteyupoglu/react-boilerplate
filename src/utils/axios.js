import axios from "axios";

/**
 * Create an axios instance
 * @function
 * @params {object} baseURL: value
 */
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export default axiosInstance;