import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000, 
  headers: {
    'Accept': 'application/json',
  }
});