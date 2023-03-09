import axios from "axios";

const axiosConfig = {
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
};

const provider = axios.create(axiosConfig);

// provider.interceptors.response.use((response) => {
//   return response.data;
// });

export default provider;
