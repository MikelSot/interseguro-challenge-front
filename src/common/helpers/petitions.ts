import axios from "axios";
import { getToken } from "./auth.helper";

const baseApi = "http://localhost:5000/api";

export const getHeaders = () => {
  const myHeaders = {
    "Content-Type": "application/json",
    Authorization: "",
  };

  myHeaders["Authorization"] = `Bearer ${getToken()}`;
  return myHeaders;
};

export const get = (route: string) =>
  axios.get(`${baseApi}/${route}`, { headers: getHeaders() });

export const post = (route: string, data: any) =>
  axios.post(`${baseApi}/${route}`, data, { headers: getHeaders() });
