import {ITeacher} from './ITeacher';

export interface ITopic {
  id?: string;
  topic_name?: string;
  detail?: string;
  teacher_id?: string;
  tags?: string[];
  creator?: ITeacher;
  createdAt?: string;
  rating?: {
    teacherId: string;
    level: number;
  };
}
