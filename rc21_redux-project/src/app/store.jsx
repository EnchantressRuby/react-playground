import { configureStore } from "@reduxjs/toolkit";
import permissionSlice from "../features/permissionSlice";
import newsSlice from "../features/newsSlice";

export const store = configureStore({
  reducer: {
    permissionSlice: permissionSlice,
    newsSlice: newsSlice,
  },
});
