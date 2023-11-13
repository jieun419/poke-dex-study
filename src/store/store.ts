import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "./modalSlice";
//modalSlice에서  Reducer부분을 export했으니까 이렇게 받아오는 게 맞음.

const store = configureStore({
  reducer: {
    modal: modalReducer
  },
});

//export type RootState = ReturnType<typeof store.getState>; //state의 기본 타입?
export type RootState = ReturnType<typeof store.getState>;
export default store;