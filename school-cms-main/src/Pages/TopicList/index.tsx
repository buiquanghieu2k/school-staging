import {
  Box,
  Button,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField
} from "@mui/material";
import useTopic from "./services";
import { ITopic } from "@Types/ITopic";
import FullPopup from "@Components/FullPopup";
import { nameObjectToString } from "@Utils/index";

export default function TopicList() {
  const {
    columns,
    page,
    rowsPerPage,
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
    handleDeleteTopic,
    listCategory,
    listTeacher
  } = useTopic();

  const renderAction = (data: ITopic) => {
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
        <Button
          color="error"
          onClick={() => {
            if (data.id) {
              handleDeleteTopic(data.id);
            }
          }}>
          Xoá
        </Button>
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
          Thêm đề tài
        </Button>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "95%" }}>
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
              {listTopic.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
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
          count={listTopic.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FullPopup
        title="Tạo đề tài"
        action={handleCreateTopic}
        actionTitle="Tạo mới"
        open={showCreate}
        setOpen={setShowCreate}
        children={
          <Box sx={{ padding: 2, flexDirection: "column", display: "flex", width: 400 }}>
            <TextField
              error={topicName.length === 0}
              helperText={!topicName.length ? "Tên đề tài bắt buộc" : ""}
              label="Tên đề tài"
              value={topicName}
              onChange={(event) => setTopicName(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              multiline
              error={detail.length === 0}
              helperText={!detail.length ? "Chi tiết bắt buộc" : ""}
              label="Chi tiết"
              value={detail}
              onChange={(event) => setDetail(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              select
              id="teacherId"
              value={teacherId}
              label="Giảng viên phụ trách"
              onChange={(event) => {
                setTeacherId(event.target.value);
              }}
              sx={{ marginBlock: 2 }}>
              {listTeacher.map((item) => {
                return (
                  <MenuItem value={item.id}>
                    {nameObjectToString(item.name) + " " + item.teacher_code}
                  </MenuItem>
                );
              })}
            </TextField>
            <TextField
              label="Phân loại"
              id="category"
              select
              sx={{ marginBlock: 2 }}
              SelectProps={{
                multiple: true,
                value: tags,
                onChange: (event: any) => {
                  setTags(event.target.value);
                }
              }}>
              {listCategory &&
                listCategory.map((item) => {
                  return <MenuItem value={item.id}>{item.category_name}</MenuItem>;
                })}
            </TextField>
          </Box>
        }
      />
      <FullPopup
        title="Chỉnh sửa giảng viên"
        action={handleEditTopic}
        actionTitle="Chỉnh sửa"
        open={showEdit}
        setOpen={setShowEdit}
        children={
          <Box sx={{ padding: 2, flexDirection: "column", display: "flex", width: 400 }}>
            <TextField
              error={topicName.length === 0}
              helperText={!topicName.length ? "Tên đề tài bắt buộc" : ""}
              label="Tên đề tài"
              value={topicName}
              onChange={(event) => setTopicName(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              multiline
              error={detail.length === 0}
              helperText={!detail.length ? "Chi tiết bắt buộc" : ""}
              label="Chi tiết"
              value={detail}
              onChange={(event) => setDetail(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              select
              id="teacherId"
              value={teacherId}
              label="Giảng viên phụ trách"
              onChange={(event) => {
                setTeacherId(event.target.value);
              }}
              sx={{ marginBlock: 2 }}>
              {listTeacher.map((item) => {
                return (
                  <MenuItem value={item.id}>
                    {nameObjectToString(item.name) + " " + item.teacher_code}
                  </MenuItem>
                );
              })}
            </TextField>
            <TextField
              label="Phân loại"
              id="category"
              select
              sx={{ marginBlock: 2 }}
              SelectProps={{
                multiple: true,
                value: tags,
                onChange: (event: any) => {
                  setTags(event.target.value);
                }
              }}>
              {listCategory &&
                listCategory.map((item) => {
                  return <MenuItem value={item.id}>{item.category_name}</MenuItem>;
                })}
            </TextField>
          </Box>
        }
      />
    </>
  );
}
