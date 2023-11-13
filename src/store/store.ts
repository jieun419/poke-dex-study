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
//리덕스의 스토어를 나타내는 RootState 타입을 사용자 정의로 지정해주었다. 
//이것으로 useSelector에 store객체의 타입을 명시.
//RootState는 Redux 스토어의 전체 상태를 나타내며, 이를 다른 파일에서 import하여 Redux 스토어의 상태를 명시적으로 지정할 때 사용합니다.


export default store;