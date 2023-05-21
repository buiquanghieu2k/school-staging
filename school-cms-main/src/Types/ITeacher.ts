export interface ITeacher {
  id?: string;
  teacher_code?: string;
  name?: {
    first_name?: string;
    last_name?: string;
  };
  date_of_birth?: string;
  gender?: string;
  email?: string;
  address?: string;
  phone_number?: string;
  main_courses?: string[];
  topic_ids?: string[];
  avatar?: string;
}
