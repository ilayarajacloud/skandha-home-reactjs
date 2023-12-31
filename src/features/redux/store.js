import { configureStore } from "@reduxjs/toolkit";

import leadListReducer from './slice/leadListSlice';
import propertyListReducer from './slice/propertyListSlice';
import locationReducer from './slice/locationSlice';
import customerListReducer from './slice/customerListSlice';
import deadListReducer from './slice/deadListSlice';
import emplyeeReducer from './slice/emplyoeeListSlice';
import sourceReducer from './slice/sourceSlice';
import statusReducer from './slice/statusSlice';

export const store = configureStore({
  reducer : {
    lead : leadListReducer,
    listPropertyReducer : propertyListReducer,
    location :locationReducer,
    customer : customerListReducer,
    deadlist :deadListReducer,
    employee : emplyeeReducer,
    source : sourceReducer,
    status : statusReducer,
  }
})