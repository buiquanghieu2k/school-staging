import {baseUrl} from '@Configs/configs';
import axios from 'axios';

const authUrl = `${baseUrl}/auth`;

export const login = async (body: {username: string; password: string}) => {
  const {username, password} = body;
  const res = await axios.post(authUrl, {
    username,
    password,
  });
  return res.data;
};
