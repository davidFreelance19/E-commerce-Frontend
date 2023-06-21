import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userSlices";
export default configureStore({
  reducer: { user: userReducer },
});