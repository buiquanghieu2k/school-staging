import { apiUrl } from "@Config/Config";
import axios from "axios";

const authUrl = `${apiUrl}/auth`;

export const login = async (body: { username: string; password: string }) => {
  const { username, password } = body;
  const res = await axios.post(authUrl, {
    username,
    password
  });
  return res.data;
};
