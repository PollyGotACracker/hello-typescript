import { AxiosResponse } from "axios";
import { api } from "./core";
import { Product } from "../types";

export const getAllProducts = (
  limit: number
): Promise<AxiosResponse<Product[]>> => {
  return api.get(`/products?limit=${limit}`);
};
