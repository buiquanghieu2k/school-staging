import {baseUrl} from '@Configs/configs';
import {IDialog} from '@Types/IDialog';
import axios from 'axios';

const conversationUrl = `${baseUrl}/conversations`;

export const createConversation = async (users: string[]) => {
  const res = await axios.post(`${conversationUrl}/`, {users});
  return res.data;
};

export const getAllConversationOfUser = async (userId: string) => {
  const res = await axios.get(`${conversationUrl}/?userId=${userId}`);
  return res.data;
};

export const addDialogToConversation = async (info: {
  id: string;
  newDialog: IDialog;
}) => {
  const res = await axios.put(`${conversationUrl}/`, info);
  return res.data;
};

export const getOrCreateConversation = async (users: string[]) => {
  const res = await axios.post(`${conversationUrl}/get-or-create/`, {users});
  return res.data;
};
