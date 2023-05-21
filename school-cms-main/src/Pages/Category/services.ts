import { useEffect, useState } from "react";
import moment from "moment";

import { createCategory, editCategory, getCategories } from "@Api/CategoryApi";
import { ICategory } from "@Types/ICategory";
import { toast } from "react-toastify";

interface Column {
  id: "category_name" | "category_code" | "description" | "updatedAt" | "createdAt";
  label: string;
  minWidth?: number;
  align?: "right";
  format: (value: any) => string;
}

export default function useCategory() {
  const columns: readonly Column[] = [
    {
      id: "category_name",
      label: "Tên chuyên ngành",
      minWidth: 100,
      format: (value: string) => value
    },
    {
      id: "category_code",
      label: "Mã chuyên ngành",
      minWidth: 170,
      align: "right",
      format: (value: string) => value
    },
    {
      id: "description",
      label: "Mô tả",
      minWidth: 170,
      align: "right",
      format: (value: string) => value
    },
    {
      id: "updatedAt",
      label: "Ngày sửa đổi",
      minWidth: 170,
      align: "right",
      format: (value: string) => moment(value).format("DD/MM/YYYY")
    },
    {
      id: "createdAt",
      label: "Ngày tạo",
      minWidth: 170,
      align: "right",
      format: (value: string) => moment(value).format("DD/MM/YYYY")
    }
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [listCategory, setListCategory] = useState<ICategory[]>([]);

  //Create
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryCode, setCategoryCode] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [id, setId] = useState<string>("");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCreateCategory = async () => {
    try {
      if (!categoryName.length || !categoryCode.length) {
        toast.error("Vui lòng nhập đủ các trường bắt buộc!");
        return;
      }
      const res = await createCategory({
        category_code: categoryCode,
        category_name: categoryName,
        description
      });

      if (res.data) {
        toast.success("Tạo mới thành công!");
        await getData();
      }
    } catch (error) {
      toast.error("Tạo mới thất bại!");
      console.error(error);
    } finally {
      clearTempData();
    }
  };

  const handleEditCategory = async () => {
    try {
      const res = await editCategory(id, {
        category_code: categoryCode,
        category_name: categoryName,
        description
      });

      if (res) {
        toast.success("Cập nhật thành công!");
        await getData();
      }
    } catch (error) {
      toast.error("Chỉnh sửa thất bại!");
    } finally {
      clearTempData();
    }
  };

  const setEditData = (category: ICategory) => {
    if (category.category_code && category.category_name && category.description && category.id) {
      setCategoryCode(category.category_code);
      setCategoryName(category.category_name);
      setDescription(category.description);
      setId(category.id);
    }
  };

  const clearTempData = () => {
    setCategoryCode("");
    setCategoryName("");
    setDescription("");
  };

  const getData = async () => {
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
    listCategory,
    showCreate,
    setShowCreate,
    handleCreateCategory,
    categoryCode,
    setCategoryCode,
    categoryName,
    setCategoryName,
    description,
    setDescription,
    showEdit,
    setShowEdit,
    handleEditCategory,
    setId,
    setEditData
  };
}
