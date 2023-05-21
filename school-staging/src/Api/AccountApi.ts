import {baseUrl} from '@Configs/configs';
import axios from 'axios';

const accountUrl = `${baseUrl}/accounts`;

export const getAll = async () => {
  const res = await axios.get(`${accountUrl}/`);
  return res.data;
};

export default {
  getAll,
};
