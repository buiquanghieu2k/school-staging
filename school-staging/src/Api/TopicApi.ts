import {baseUrl} from '@Configs/configs';
import axios from 'axios';

const topicUrl = `${baseUrl}/topics`;

export const getTopics = async ({
  search,
  ids,
}: {
  search?: any;
  ids?: string[];
}) => {
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

export const ratingTopic = async (data: {
  teacherId: string;
  topicId: string;
  rating: number;
}) => {
  const res = await axios.put(`${topicUrl}/rating/`, data);
  return res.data;
};
