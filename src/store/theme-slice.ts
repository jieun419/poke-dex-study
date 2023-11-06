import { createSlice } from '@reduxjs/toolkit';

interface StateT {
  themeMode: string;
}

const localTheme = localStorage.getItem('THEME');

const initialState: StateT = {
  themeMode: localTheme ? localTheme : 'light',
};

const themeSlice = createSlice({
  name: 'themetype',
  initialState,
  reducers: {
    darkMode(state) {
      state.themeMode = 'dark';
    },
    lightMode(state) {
      state.themeMode = 'light';
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const themeActions = themeSlice.actions;
