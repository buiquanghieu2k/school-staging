import {baseUrl} from '@Configs/configs';
import {IStudent} from '@Types/IStudent';
import axios from 'axios';

const studentUrl = `${baseUrl}/students`;

export const getStudentById = async (params: any) => {
  const res = await axios.get(`${studentUrl}/${params}`);
  return res.data;
};

export const studentSelectTopic = async (
  student_id?: string,
  topic_id?: string,
) => {
  const res = await axios.put(`${studentUrl}/`, {
    student_id,
    topic_id,
  });
  return res.data;
};

export const updateStudentById = async (info: {
  id: string;
  data?: IStudent;
}) => {
  const res = await axios.post(`${studentUrl}/update`, info);

  return res.data;
};

export const getAll = async () => {
  const res = await axios.get(`${studentUrl}/`);
  return res.data;
};

export default {
  getStudentById,
  studentSelectTopic,
  getAll,
};
