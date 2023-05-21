import { apiUrl } from "@Config/Config";
import { ITopic } from "@Types/ITopic";
import axios from "axios";

const topicUrl = `${apiUrl}/topics`;

export const getTopics = async ({ search, ids }: { search?: any; ids?: string[] }) => {
  let url = `${topicUrl}/`;
  if (search) {
    url += `?search=${search}`;
  }
  if (ids) {
    url += `?ids=${ids}`;
  }
  const res = await axios.get(url);
  return res.data;
};

export const deleteTopicById = async (id: string) => {
  const res = await axios.delete(`${topicUrl}/${id}`);
  return res.data;
};

export const updateTopic = async (id: string, data: any) => {
  const res = await axios.put(`${topicUrl}/`, {
    id,
    data
  });
  return res.data;
};

export const createTopic = async (data: ITopic) => {
  const res = await axios.post(`${topicUrl}/`, data);
  return res.data;
};
