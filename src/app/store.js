import { configureStore } from "@reduxjs/toolkit";
import usersReduceer from "../features/users/usersSlice";
export const store = configureStore({
  reducer: {
    users: usersReduceer,
  },
});
