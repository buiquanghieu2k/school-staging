import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { createTopic, deleteTopicById, getTopics, updateTopic } from "@Api/TopicApi";
import { ITeacher } from "@Types/ITeacher";
import { nameObjectToString } from "@Utils/index";
import { ICategory } from "@Types/ICategory";
import { getCategories } from "@Api/CategoryApi";
import { ITopic } from "@Types/ITopic";

interface Column {
  id: "topic_name" | "detail" | "teacher_id" | "tags";
  label: string;
  minWidth?: number;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  format: (value: any) => string;
}

export default function useTopic() {
  const columns: readonly Column[] = [
    {
      id: "topic_name",
      label: "Tên đề tài",
      minWidth: 160,
      align: "center",
      format: (value: string) => value
    },
    {
      id: "detail",
      label: "Chi tiết đề tài",
      minWidth: 600,
      align: "center",
      format: (value: string) => value
    },
    {
      id: "teacher_id",
      label: "Giảng viên phụ trách",
      minWidth: 170,
      align: "center",
      format: (value: string) => {
        const teacher = listTeacher.find((item) => {
          return item.id == value;
        });
        return nameObjectToString(teacher?.name);
      }
    },
    {
      id: "tags",
      label: "Phân loại",
      minWidth: 170,
      align: "center",
      format: (value: string[]) => {
        let result = "";
        value.forEach((item) => {
          const category = listCategory.find((cate) => {
            return cate.id == item;
          });
          result += category?.category_name + "\n";
        });
        return result;
      }
    }
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [listTopic, setListTopic] = useState<ITopic[]>([]);
  const [listTeacher, setListTeacher] = useState<ITeacher[]>([]);
  const [listCategory, setListCategory] = useState<ICategory[]>([]);

  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);

  //Data
  const [topicName, setTopicName] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [teacherId, setTeacherId] = useState<string>("");
  const [id, setId] = useState<string>("");

  const setEditData = (currentTopic: ITopic) => {
    if (
      !currentTopic.id ||
      !currentTopic.topic_name ||
      !currentTopic.detail ||
      !currentTopic.teacher_id ||
      !currentTopic.tags
    ) {
      return;
    }
    setId(currentTopic.id);
    setTopicName(currentTopic.topic_name);
    setDetail(currentTopic.detail);
    setTags(currentTopic.tags);
    setTeacherId(currentTopic.teacher_id);
  };

  const clearTempData = () => {
    setId("");
    setTopicName("");
    setDetail("");
    setTags([]);
    setTeacherId("");
    setId("");
  };

  const handleCreateTopic = async () => {
    try {
      if (!topicName || !detail || !teacherId || !tags) {
        toast.error("Vui lòng nhập đủ thông tin");
        return;
      }
      const uploadData = {
        topic_name: topicName,
        detail,
        teacher_id: teacherId,
        tags
      };

      const topicRes = await createTopic(uploadData);

      if (topicRes) {
        toast.success("Tạo thành công đề tài");
        await getData();
      }
    } catch (error) {
      toast.error("Tạo đề tài thất bại");
    }
  };

  const handleEditTopic = async () => {
    try {
      if (!topicName || !detail || !teacherId || !tags) {
        toast.error("Vui lòng nhập đủ thông tin");
        return;
      }
      const uploadData: ITopic = {
        topic_name: topicName,
        detail,
        teacher_id: teacherId,
        tags
      };

      const res = await updateTopic(id, uploadData);

      if (res) {
        toast.success("Cập nhật thành công");
        await getData();
      }
    } catch (error) {
      toast.error("Chỉnh sửa đề tài thất bại");
    }
  };

  const handleDeleteTopic = async (id: string) => {
    try {
      const res = await deleteTopicById(id);
      if (res) {
        toast.success("Xoá thành công đề tài");
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
      const categoryRes = await getCategories();
      if (categoryRes) {
        setListCategory(categoryRes);
      }
      const res = await getTopics({});
      if (res) {
        setListTopic(res.topics);
        setListTeacher(res.teachers);
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
    listTopic,
    showCreate,
    setShowCreate,
    showEdit,
    setShowEdit,
    topicName,
    setTopicName,
    detail,
    setDetail,
    tags,
    setTags,
    teacherId,
    setTeacherId,
    handleCreateTopic,
    handleEditTopic,
    setEditData,
    clearTempData,
    id,
    setId,
    handleDeleteTopic,
    listCategory,
    listTeacher
  };
}
