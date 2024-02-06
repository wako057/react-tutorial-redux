import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth";
import counterSlice from "./counter";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }
});

export const authSliceActions = authSlice.actions;
export const counterSliceActions = counterSlice.actions
export default store;