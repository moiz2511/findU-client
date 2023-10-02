import axios from "axios";

export const instance = axios.create({
  baseURL: "https://nuranest.catansg.com/pikka/api",
  timeout: 10000,
});
