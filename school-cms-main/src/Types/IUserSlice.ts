import { IStudent } from "./IStudent";
import { ITeacher } from "./ITeacher";

export default interface IUserSlice {
  user: {
    id?: string;
    username?: string;
    role?: string;
    password?: string;
  };
  token: string;
  teacherData?: ITeacher;
  studentData?: IStudent;
}
