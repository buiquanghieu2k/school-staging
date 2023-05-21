import { apiUrl } from "@Config/Config";
import axios from "axios";

const accountUrl = `${apiUrl}/accounts`;

export const createUser = async (username: string, password: string) => {
  const res = await axios.post(`${accountUrl}/`, {
    username,
    password,
    role: "student"
  });
  return res.data;
};
