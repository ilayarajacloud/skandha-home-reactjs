import {createSlice} from "@reduxjs/toolkit";

const employeeInitialState={
  employeeList : []
}

const createEmployeeSlice = createSlice({
  name : "emplyee",
  initialState : employeeInitialState,
  reducers : {
    updateEmplyeeList:(state, action)=>{
      state.employeeList = action.payload
    }
  }
})

export const{updateEmplyeeList} = createEmployeeSlice.actions;
export default createEmployeeSlice.reducer;
