import { configureStore } from "@reduxjs/toolkit";
import brandsSlice from "./brands/slice";

export const store = configureStore({
  reducer: {
    [brandsSlice.name]: brandsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
