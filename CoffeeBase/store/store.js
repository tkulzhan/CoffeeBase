import { configureStore } from "@reduxjs/toolkit";
import marketSlice from "./marketSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    market: marketSlice,
    user: userSlice,
  },
});
