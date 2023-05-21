import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IStudent } from "@Types/IStudent";
import IUserSlice from "@Types/IUserSlice";

const initialState: IUserSlice = {
  user: {
    id: "",
    username: "",
    role: "",
    password: ""
  },
  token: "",
  teacherData: {},
  studentData: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserSlice>) => {
      state.user = {
        id: action.payload.user.id,
        role: action.payload.user.role,
        username: action.payload.user.username,
        password: action.payload.user.password
      };
      state.token = action.payload.token;
      state.studentData = action.payload.studentData;
      state.teacherData = action.payload.teacherData;
    },
    resetUser: (state) => {
      state.user = {
        id: "",
        role: "",
        username: "",
        password: ""
      };
      state.token = "";
      state.studentData = {};
      state.teacherData = {};
    },
    updateStudent: (state, action: PayloadAction<IStudent>) => {
      state.studentData = {
        ...state.studentData,
        ...action.payload
      };
    }
  }
});

export const { setUser, resetUser, updateStudent } = userSlice.actions;
export default userSlice.reducer;
