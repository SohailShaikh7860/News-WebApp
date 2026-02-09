import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 5000,
})