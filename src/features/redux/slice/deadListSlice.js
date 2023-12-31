import { createSlice } from "@reduxjs/toolkit";

const deadListInitialState ={
  deadList : []
}

const deadListSlice=createSlice({
  name:"deadlist",
  initialState:deadListInitialState,
  reducers : {
    updateDeadList : (state, action)=>{
      state.deadList=action.payload
    }
  }
})

export const{updateDeadList}=deadListSlice.actions;
export default deadListSlice.reducer
