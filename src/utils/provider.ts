import axios from "axios";

const axiosConfig = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
};
export default axios.create(axiosConfig);
