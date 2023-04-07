import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "reducer";
import { api } from 'state/api';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefault) => getDefault().concat(api.middleware),
  });
export default store;
