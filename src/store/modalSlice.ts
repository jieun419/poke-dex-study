import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalType: "",
    isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal", //slice 의 이름
  initialState,
  reducers: {
    openModal : (state, actions) => {
        const { modalType } = actions.payload;
        state.modalType = modalType;
        state.isOpen = true;
    },
    closeModal: (state) => {
        state.isOpen = false;
      }
  }, 
});
export const { openModal, closeModal } = modalSlice.actions; 
export const selectModal = (state) => state.modal;
//reducer함수를 export해서 밖에서도 쓸 수 있다
export default modalSlice.reducer;