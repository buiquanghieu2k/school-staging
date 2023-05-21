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
  TextField,
  Select
} from "@mui/material";
import moment from "moment";
import { DatePicker } from "@mui/x-date-pickers";

import useTeacherList from "./services";
import FullPopup from "@Components/FullPopup";
import { ITeacher } from "@Types/ITeacher";

export default function TeacherList() {
  const {
    columns,
    page,
    rowsPerPage,
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
    listCategory
  } = useTeacherList();

  const renderAction = (data: ITeacher) => {
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
              handleDeleteTeacher(data.id);
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
          Thêm giảng viên
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
              {listTeacher
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
          count={listTeacher.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FullPopup
        title="Tạo giảng viên"
        action={handleCreateTeacher}
        actionTitle="Tạo mới"
        open={showCreate}
        setOpen={setShowCreate}
        children={
          <Box sx={{ padding: 2, flexDirection: "column", display: "flex", width: 400 }}>
            <TextField
              error={username.length === 0}
              helperText={!username.length ? "Tên tài khoản bắt buộc" : ""}
              label="Tên tài khoản"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={password.length === 0}
              helperText={!password.length ? "Mật khẩu bắt buộc" : ""}
              label="Mật khẩu"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={teacherCode.length === 0}
              helperText={!teacherCode.length ? "Mã giảng viên bắt buộc" : ""}
              label="Mã giảng viên"
              value={teacherCode}
              onChange={(event) => setTeacherCode(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={firstName.length === 0}
              helperText={!firstName.length ? "Tên bắt buộc" : ""}
              label="Tên"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={lastName.length === 0}
              helperText={!lastName.length ? "Họ bắt buộc" : ""}
              label="Họ"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <DatePicker
              value={moment(dateOfBirth)}
              label="Ngày sinh"
              sx={{ paddingBlock: 2 }}
              onChange={(date: any) => {
                setDateOfBirth(date.toISOString());
              }}
            />
            <TextField
              select
              id="demo-simple-select"
              value={gender}
              label="Giới tính"
              onChange={(event) => {
                setGender(event.target.value);
              }}
              sx={{ marginBlock: 2 }}>
              <MenuItem value={"male"}>Nam</MenuItem>
              <MenuItem value={"female"}>Nữ</MenuItem>
            </TextField>
            <TextField
              error={email.length === 0}
              helperText={!email.length ? "Email bắt buộc" : ""}
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={phoneNumber.length === 0}
              helperText={!phoneNumber.length ? "Số điện thoại bắt buộc" : ""}
              label="Số điện thoại"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={address.length === 0}
              helperText={!address.length ? "Địa chỉ bắt buộc" : ""}
              label="Địa chỉ"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              label="Chuyên ngành"
              id="mainCourses"
              select
              sx={{ marginBlock: 2 }}
              SelectProps={{
                multiple: true,
                value: mainCourses,
                onChange: (event: any) => {
                  setMainCourses(event.target.value);
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
        action={handleEditTeacher}
        actionTitle="Chỉnh sửa"
        open={showEdit}
        setOpen={setShowEdit}
        children={
          <Box sx={{ padding: 2, flexDirection: "column", display: "flex", width: 400 }}>
            <TextField
              error={teacherCode.length === 0}
              helperText={!teacherCode.length ? "Mã giảng viên bắt buộc" : ""}
              label="Mã giảng viên"
              value={teacherCode}
              onChange={(event) => setTeacherCode(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={firstName.length === 0}
              helperText={!firstName.length ? "Tên bắt buộc" : ""}
              label="Tên"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={lastName.length === 0}
              helperText={!lastName.length ? "Họ bắt buộc" : ""}
              label="Họ"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <DatePicker
              value={moment(dateOfBirth)}
              label="Ngày sinh"
              sx={{ paddingBlock: 2 }}
              onChange={(date: any) => {
                setDateOfBirth(date.toISOString());
              }}
            />
            <TextField
              select
              id="demo-simple-select"
              value={gender}
              label="Giới tính"
              onChange={(event) => {
                setGender(event.target.value);
              }}
              sx={{ marginBlock: 2 }}>
              <MenuItem value={"male"}>Nam</MenuItem>
              <MenuItem value={"female"}>Nữ</MenuItem>
            </TextField>
            <TextField
              error={email.length === 0}
              helperText={!email.length ? "Email bắt buộc" : ""}
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={phoneNumber.length === 0}
              helperText={!phoneNumber.length ? "Số điện thoại bắt buộc" : ""}
              label="Số điện thoại"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              error={address.length === 0}
              helperText={!address.length ? "Địa chỉ bắt buộc" : ""}
              label="Địa chỉ"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              sx={{ paddingBlock: 2 }}
            />
            <TextField
              label="Chuyên ngành"
              id="mainCourses"
              select
              sx={{ marginBlock: 2 }}
              SelectProps={{
                multiple: true,
                value: mainCourses,
                onChange: (event: any) => {
                  setMainCourses(event.target.value);
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
