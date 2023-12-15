import { AxiosResponse } from "axios";
import { api } from "./core";
import { Product, Sort } from "../types";

export const getAllProducts = (
  limit: number,
  sort: Sort = Sort.Asc
): Promise<AxiosResponse<Product[]>> => {
  return api.get(`/products?limit=${limit}&sort=${sort}`);
};
