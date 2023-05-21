import {baseUrl} from '@Configs/configs';
import {ITeacher} from '@Types/ITeacher';
import axios from 'axios';

const teacherUrl = `${baseUrl}/teachers`;

export const getTeachers = async (query?: any) => {
  console.log(query);
  const res = await axios.get(`${teacherUrl}/`);
  return res.data;
};

export const updateTeacherById = async (info: {
  id: string;
  data?: ITeacher;
}) => {
  const res = await axios.put(`${teacherUrl}/`, info);

  return res.data;
};

export default {
  getTeachers,
  updateTeacherById,
};
