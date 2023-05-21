import {baseUrl} from '@Configs/configs';
import axios from 'axios';

const categoryUrl = `${baseUrl}/categories`;

export const getAll = async () => {
  const res = await axios.get(`${categoryUrl}`);
  return res.data;
};
