import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "./modalSlice";
//대체 얘는 어디서?

export default configureStore({
  reducer: {
    modal: modalReducer
  },
})