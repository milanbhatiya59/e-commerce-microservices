import axios from "axios";

const api = axios.create({
  baseURL: "/api", // All requests will be prefixed with /api
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
