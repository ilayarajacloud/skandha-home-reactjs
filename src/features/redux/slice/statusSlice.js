import { createSlice } from "@reduxjs/toolkit";

const statusInitialState={
  statusList:[]
}

const createStatusSlice = createSlice({
  name:"status",
  initialState:statusInitialState,
  reducers : {
    updateStatus:(state, action)=>{
      state.statusList=action.payload
    }
  }
})
export const{updateStatus}=createStatusSlice.actions;
export default createStatusSlice.reducer;
