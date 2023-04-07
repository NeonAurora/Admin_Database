import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from 'state';
import { api } from 'state/api';

const rootReducer = combineReducers({
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  });
  
  export default rootReducer;