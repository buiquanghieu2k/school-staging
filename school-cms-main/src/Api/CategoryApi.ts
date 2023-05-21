import { apiUrl } from "@Config/Config";
import { ICategory } from "@Types/ICategory";
import axios from "axios";

const categoryUrl = `${apiUrl}/categories`;

export const getCategories = async () => {
  const res = await axios.get(`${categoryUrl}/`);
  return res.data;
};

export const createCategory = async (body: any) => {
  const res = await axios.post(`${categoryUrl}/`, body);
  return res.data;
};

export const editCategory = async (id: string, data: ICategory) => {
  const res = await axios.put(`${categoryUrl}/`, {
    id,
    data
  });
  return res.data;
};

export default {
  getCategories,
  createCategory
};
