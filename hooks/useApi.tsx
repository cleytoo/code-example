import axios, { AxiosError } from "axios";
import { useState } from "react";

const APIURL = import.meta.env.VITE_API_URL;
const APIURL02 = import.meta.env.VITE_API_URL02;

export const useApi = () => {
  const [baseUrl, setBaseUrl] = useState(() => APIURL);

  const http = axios.create({
    baseURL: `${baseUrl}`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  http.interceptors.response.use(
    (res) => res,
    (err: AxiosError) => {
      setBaseUrl((state) => (state === APIURL ? APIURL02 : APIURL));

      return Promise.reject(err);
    }
  );

  const api = (port = "8006") => {
    http.defaults.baseURL = `${baseUrl}:${port}`;
    return http;
  };

  return { api };
};
