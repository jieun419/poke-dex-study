import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './theme-slice';

const store = configureStore({
  reducer: {
    themeType: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
