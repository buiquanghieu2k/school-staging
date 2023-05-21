import {configureStore, combineReducers} from '@reduxjs/toolkit';

import userSlice from '@Store/Reducers/userSlice';
import loadingSlice from './Reducers/loadingSlice';

const combinedReducer = combineReducers({
  user: userSlice,
  loading: loadingSlice,
});

const store = configureStore({
  reducer: combinedReducer,
});

export {store};
export type IRootState = ReturnType<typeof store.getState>;
