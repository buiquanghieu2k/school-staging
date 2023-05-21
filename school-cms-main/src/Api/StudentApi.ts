import { apiUrl } from "@Config/Config";
import { IStudent } from "@Types/IStudent";
import axios from "axios";

const studentUrl = `${apiUrl}/students`;

export const getStudentById = async (params?: any) => {
  const res = await axios.get(`${studentUrl}/${params}`);
  return res.data;
};

export const getStudents = async (query?: any) => {
  const res = await axios.get(`${studentUrl}/`);
  return res.data;
};

export const studentSelectTopic = async (student_id?: string, topic_id?: string) => {
  const res = await axios.put(`${studentUrl}/`, {
    student_id,
    topic_id
  });
  return res.data;
};

export const deleteStudentById = async (id: string) => {
  const res = await axios.delete(`${studentUrl}/${id}`);
  return res.data;
};

export const updateStudentById = async (id: string, data?: IStudent) => {
  const res = await axios.put(`${studentUrl}/update`, {
    id,
    data
  });
  return res.data;
};

export const createStudent = async (data: any) => {
  const res = await axios.post(`${studentUrl}/`, data);
  return res.data;
};
