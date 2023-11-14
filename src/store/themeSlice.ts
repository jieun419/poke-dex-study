import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  darkTheme: boolean;
}

const initialState: ThemeState = {
  darkTheme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme
    },
  },
});


const {actions, reducer} = themeSlice;
export const { toggleTheme } = actions; 
export default reducer; 