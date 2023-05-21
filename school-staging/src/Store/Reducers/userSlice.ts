import {login} from '@Api/AuthApi';
import {IStudent} from '@Types/IStudent';
import {ITeacher} from '@Types/ITeacher';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUserSlice {
  user: {
    id?: string;
    username?: string;
    role?: string;
    password?: string;
  };
  token: string;
  teacherData?: ITeacher;
  studentData?: IStudent;
}

const initialState: IUserSlice = {
  user: {
    id: '',
    username: '',
    role: '',
    password: '',
  },
  token: '',
  teacherData: {},
  studentData: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserSlice>) => {
      state.user = {
        id: action.payload.user.id,
        role: action.payload.user.role,
        username: action.payload.user.username,
        password: action.payload.user.password,
      };
      state.token = action.payload.token;
      state.studentData = action.payload.studentData;
      state.teacherData = action.payload.teacherData;
    },
    resetUser: state => {
      state.user = {
        id: '',
        role: '',
        username: '',
        password: '',
      };
      state.token = '';
      state.studentData = {};
      state.teacherData = {};
    },
    refetchUser: state => {
      if (!state.user.username || !state.user.password) {
        return;
      }
      login({
        username: state.user.username,
        password: state.user.password,
      })
        .then(data => {
          setUser({
            user: {
              id: data.user.id,
              username: data.user.username,
              password: state.user.password,
              role: data.user.role,
            },
            token: data.token,
            studentData: data?.studentData,
            teacherData: data?.teacherData,
          });
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateStudent: (state, action: PayloadAction<IStudent>) => {
      state.studentData = {
        ...state.studentData,
        ...action.payload,
      };
    },
    updateTeacher: (state, action: PayloadAction<ITeacher>) => {
      state.teacherData = {
        ...state.teacherData,
        ...action.payload,
      };
    },
  },
});

export const {setUser, resetUser, refetchUser, updateStudent, updateTeacher} =
  userSlice.actions;
export default userSlice.reducer;
