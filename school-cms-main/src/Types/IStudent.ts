export interface IStudent {
  userId?: string;
  id?: string;
  student_code?: string;
  name?: {
    first_name?: string;
    last_name?: string;
  };
  date_of_birth?: string;
  gender?: string;
  email?: string;
  phone_number?: string;
  address?: string;
  academic_year?: number;
  specialization?: string;
  selected_topic_id?: string;
}
