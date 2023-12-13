import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

const apiConfig: CreateAxiosDefaults<AxiosInstance> = {
  baseURL: "https://fakestoreapi.com",
};

export const api: AxiosInstance = axios.create(apiConfig);
