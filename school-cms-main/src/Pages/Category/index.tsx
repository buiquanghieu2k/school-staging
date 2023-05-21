import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Box,
  TextField
} from "@mui/material";

import useCategory from "./services";
import FullPopup from "@Components/FullPopup";
import { ICategory } from "@Types/ICategory";

export default function Category() {
  const {
    columns,
    page,
    rowsPerPage,
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
    setEditData
  } = useCategory();

  const renderAction = (data: ICategory) => {
    return (
      <TableCell sx={{ display: "flex" }} align="right">
        <Button
          color="warning"
          onClick={() => {
            setShowEdit(true);
            setEditData(data);
          }}>
          Chỉnh sửa
        </Button>
        {/* <Button color="error">Xoá</Button> */}
      </TableCell>
    );
  };

  return (
    <>
      <Box
        display="flex"
        width="100%"
        justifyContent="flex-end"
        alignContent="center"
        alignItems="center"
        sx={{ paddingBlock: 1 }}>
        <Button variant="contained" color="primary" onClick={() => setShowCreate(true)}>
          Thêm chuyên ngành
        </Button>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "90%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {listCategory
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format(value)}
                          </TableCell>
                        );
                      })}
                      {renderAction(row)}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={listCategory.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FullPopup
        title="Tạo chuyên ngành"
        action={handleCreateCategory}
        actionTitle="Tạo mới"
        open={showCreate}
        setOpen={setShowCreate}
        children={
          <Box sx={{ padding: 2, flexDirection: "column", display: "flex", width: 400 }}>
            <TextField
              error={categoryName.length === 0}
              helperText={!categoryName.length ? "Tên chuyên ngành bắt buộc" : ""}
              label="Tên chuyên ngành"
              value={categoryName}
              onChange={(event) => setCategoryName(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={categoryCode.length === 0}
              helperText={!categoryCode.length ? "Mã chuyên ngành bắt buộc" : ""}
              label="Mã chuyên ngành"
              value={categoryCode}
              onChange={(event) => setCategoryCode(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              label="Mô tả"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
          </Box>
        }
      />
      <FullPopup
        title="Chỉnh sửa chuyên ngành"
        action={handleEditCategory}
        actionTitle="Chỉnh sửa"
        open={showEdit}
        setOpen={setShowEdit}
        children={
          <Box sx={{ padding: 2, flexDirection: "column", display: "flex", width: 400 }}>
            <TextField
              error={categoryName.length === 0}
              helperText={!categoryName.length ? "Tên chuyên ngành bắt buộc" : ""}
              label="Tên chuyên ngành"
              value={categoryName}
              onChange={(event) => setCategoryName(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={categoryCode.length === 0}
              helperText={!categoryCode.length ? "Mã chuyên ngành bắt buộc" : ""}
              label="Mã chuyên ngành"
              value={categoryCode}
              onChange={(event) => setCategoryCode(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              label="Mô tả"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
          </Box>
        }
      />
    </>
  );
}
