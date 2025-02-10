import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../reducers/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer, // userSlice를 store에 등록
  }
})
