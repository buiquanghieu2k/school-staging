import { useEffect, useState } from "react";
import moment from "moment";

import { ITeacher } from "@Types/ITeacher";
import { createTeacher, deleteTeacherById, getTeachers, updateTeacherById } from "@Api/TeacherApi";
import { toast } from "react-toastify";
import { ICategory } from "@Types/ICategory";
import { getCategories } from "@Api/CategoryApi";

interface Column {
  id: "teacher_code" | "name" | "date_of_birth" | "email" | "phone_number" | "address";
  label: string;
  minWidth?: number;
  align?: "right";
  format: (value: any) => string;
}

export default function useTeacherList() {
  const columns: readonly Column[] = [
    {
      id: "teacher_code",
      label: "Mã giảng viên",
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
  const [listTeacher, setListTeacher] = useState<ITeacher[]>([]);

  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const [listCategory, setListCategory] = useState<ICategory[]>([]);

  //Data
  const [teacherCode, setTeacherCode] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mainCourses, setMainCourses] = useState<string[]>([]);
  const [topicIds, setTopicIds] = useState<string[]>([]);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [id, setId] = useState<string>("");

  const setEditData = (teacher: ITeacher) => {
    if (
      !teacher.teacher_code ||
      !teacher.name?.first_name ||
      !teacher.name.last_name ||
      !teacher.date_of_birth ||
      !teacher.email ||
      !teacher.phone_number ||
      !teacher.address ||
      !teacher.gender ||
      !teacher.id ||
      !teacher.topic_ids ||
      !teacher.main_courses
    ) {
      return;
    }
    setMainCourses(teacher.main_courses);
    setTopicIds(teacher.topic_ids);
    setTeacherCode(teacher.teacher_code);
    setFirstName(teacher.name?.first_name);
    setLastName(teacher.name?.last_name);
    setDateOfBirth(teacher.date_of_birth);
    setEmail(teacher.email);
    setPhoneNumber(teacher.phone_number);
    setAddress(teacher.address);
    setGender(teacher?.gender);
    setId(teacher.id);
  };

  const clearTempData = () => {
    setTeacherCode("");
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setGender("");
    setUsername("");
    setPassword("");
    setId("");
    setMainCourses([]);
    setTopicIds([]);
  };

  const handleCreateTeacher = async () => {
    try {
      if (
        !username ||
        !password ||
        !teacherCode ||
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
        teacher_code: teacherCode,
        name: {
          first_name: firstName,
          last_name: lastName
        },
        gender,
        email,
        phone_number: phoneNumber,
        date_of_birth: dateOfBirth,
        address,
        main_courses: mainCourses,
        topic_ids: topicIds
      };

      const teacherRes = await createTeacher(uploadData);

      if (teacherRes) {
        toast.success("Tạo thành công giảng viên");
        getData();
      }
    } catch (error) {
      toast.error("Tạo giảng viên thất bại");
    }
  };

  const handleEditTeacher = async () => {
    try {
      if (
        !teacherCode ||
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
      const uploadData: ITeacher = {
        teacher_code: teacherCode,
        name: {
          first_name: firstName,
          last_name: lastName
        },
        gender,
        email,
        phone_number: phoneNumber,
        date_of_birth: dateOfBirth,
        address,
        main_courses: mainCourses,
        topic_ids: topicIds
      };

      const res = await updateTeacherById(id, uploadData);

      if (res) {
        toast.success("Cập nhật thành công");
        await getData();
      }
    } catch (error) {
      toast.error("Chỉnh sửa giảng viên thất bại");
    }
  };

  const handleDeleteTeacher = async (id: string) => {
    try {
      const res = await deleteTeacherById(id);
      if (res) {
        toast.success("Xoá thành công giảng viên");
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
      const res = await getTeachers();
      if (res) {
        setListTeacher(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getListCategory = async () => {
    try {
      const res = await getCategories();
      if (res) {
        setListCategory(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListCategory();
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
    listTeacher,
    showCreate,
    setShowCreate,
    handleCreateTeacher,
    handleEditTeacher,
    handleDeleteTeacher,
    setEditData,
    showEdit,
    setShowEdit,
    username,
    setUsername,
    password,
    setPassword,
    teacherCode,
    setTeacherCode,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    gender,
    setGender,
    dateOfBirth,
    setDateOfBirth,
    address,
    setAddress,
    mainCourses,
    setMainCourses,
    topicIds,
    setTopicIds,
    listCategory
  };
}
