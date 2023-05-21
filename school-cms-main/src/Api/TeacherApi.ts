import { apiUrl } from "@Config/Config";
import axios from "axios";

const teacherUrl = `${apiUrl}/teachers`;

export const getTeachers = async (query?: any) => {
  console.log(query);
  const res = await axios.get(`${teacherUrl}/`);
  return res.data;
};

export const createTeacher = async (data: any) => {
  const res = await axios.post(`${teacherUrl}/`, data);
  return res.data;
};

export const updateTeacherById = async (id: string, data: any) => {
  const res = await axios.put(`${teacherUrl}/`, {
    id,
    data
  });
  return res.data;
};

export const deleteTeacherById = async (id: string) => {
  const res = await axios.delete(`${teacherUrl}/${id}`);
  return res.data;
};
