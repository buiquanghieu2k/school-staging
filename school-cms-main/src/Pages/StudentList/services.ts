import { useEffect, useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";

import { IStudent } from "@Types/IStudent";
import { createStudent, deleteStudentById, getStudents, updateStudentById } from "@Api/StudentApi";

interface Column {
  id: "student_code" | "name" | "date_of_birth" | "email" | "phone_number" | "address";
  label: string;
  minWidth?: number;
  align?: "right";
  format: (value: any) => string;
}

export default function useStudentList() {
  const columns: readonly Column[] = [
    {
      id: "student_code",
      label: "Mã sinh viên",
      minWidth: 100,
      format: (value: string) => {
        return `${value}`;
      }
    },
    {
      id: "name",
      label: "Họ và tên",
      minWidth: 170,
      align: "right",
      format: (value: { first_name?: string; last_name?: string }) => {
        //@ts-expect-error
        return `${value?.last_name + value?.first_name}`;
      }
    },
    {
      id: "date_of_birth",
      label: "Ngày sinh",
      minWidth: 170,
      align: "right",
      format: (value: string) => moment(value).format("DD/MM/YYYY")
    },
    {
      id: "email",
      label: "Email",
      minWidth: 170,
      align: "right",
      format: (value: string) => value
    },
    {
      id: "phone_number",
      label: "Số điện thoại",
      minWidth: 170,
      align: "right",
      format: (value: string) => value
    },
    {
      id: "address",
      label: "Địa chỉ",
      minWidth: 170,
      align: "right",
      format: (value: string) => value
    }
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [listStudent, setListStudent] = useState<IStudent[]>([]);

  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);

  //Data
  const [studentCode, setStudentCode] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [academicYear, setAcademicYear] = useState<number>(1);
  const [specialization, setSpecialization] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [id, setId] = useState<string>("");

  const setEditData = (student: IStudent) => {
    if (
      !student.student_code ||
      !student.name?.first_name ||
      !student.name.last_name ||
      !student.date_of_birth ||
      !student.email ||
      !student.phone_number ||
      !student.address ||
      !student.gender ||
      !student.id
    ) {
      return;
    }
    setStudentCode(student.student_code);
    setFirstName(student.name?.first_name);
    setLastName(student.name?.last_name);
    setDateOfBirth(student.date_of_birth);
    setEmail(student.email);
    setPhoneNumber(student.phone_number);
    setAddress(student.address);
    setGender(student?.gender);
    setId(student.id);
  };

  const clearTempData = () => {
    setStudentCode("");
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setAcademicYear(1);
    setSpecialization("");
    setGender("");
    setUsername("");
    setPassword("");
    setId("");
  };

  const handleCreateStudent = async () => {
    try {
      if (
        !username ||
        !password ||
        !studentCode ||
        !firstName ||
        !lastName ||
        !gender ||
        !dateOfBirth ||
        !email ||
        !phoneNumber ||
        !address
      ) {
        toast.error("Vui lòng nhập đủ thông tin");
        return;
      }
      const uploadData = {
        username,
        password,
        student_code: studentCode,
        name: {
          first_name: firstName,
          last_name: lastName
        },
        gender,
        email,
        phone_number: phoneNumber,
        date_of_birth: dateOfBirth,
        address
      };

      const studentRes = await createStudent(uploadData);

      if (studentRes) {
        toast.success("Tạo thành công sinh viên");
        await getData();
      }
    } catch (error) {
      toast.error("Tạo sinh viên thất bại");
    }
  };

  const handleEditStudent = async () => {
    try {
      if (
        !studentCode ||
        !firstName ||
        !lastName ||
        !gender ||
        !dateOfBirth ||
        !email ||
        !phoneNumber ||
        !address
      ) {
        toast.error("Vui lòng nhập đủ thông tin");
        return;
      }
      const uploadData: IStudent = {
        student_code: studentCode,
        name: {
          first_name: firstName,
          last_name: lastName
        },
        gender,
        email,
        phone_number: phoneNumber,
        date_of_birth: dateOfBirth,
        address
      };

      const res = await updateStudentById(id, uploadData);

      if (res) {
        toast.success("Cập nhật thành công");
        await getData();
      }
    } catch (error) {
      toast.error("Chỉnh sửa sinh viên thất bại");
    }
  };

  const handleDeleteStudent = async (id: string) => {
    try {
      const res = await deleteStudentById(id);
      if (res) {
        toast.success("Xoá thành công sinh viên");
        clearTempData();
        await getData();
      }
    } catch (error) {
      toast.error("Xoá thất bại");
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getData = async () => {
    try {
      const res = await getStudents();
      if (res) {
        setListStudent(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    columns,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    listStudent,
    showCreate,
    setShowCreate,
    showEdit,
    setShowEdit,
    setStudentCode,
    setFirstName,
    setLastName,
    setDateOfBirth,
    setEmail,
    setPhoneNumber,
    setAddress,
    setAcademicYear,
    setSpecialization,
    studentCode,
    firstName,
    lastName,
    gender,
    dateOfBirth,
    email,
    phoneNumber,
    address,
    academicYear,
    specialization,
    username,
    password,
    setPassword,
    setUsername,
    setGender,
    handleCreateStudent,
    handleEditStudent,
    setEditData,
    clearTempData,
    id,
    setId,
    handleDeleteStudent
  };
}
