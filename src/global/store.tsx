import reducer from "./globalState";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer,
});
