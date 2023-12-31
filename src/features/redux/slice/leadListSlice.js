import {createSlice} from "@reduxjs/toolkit";

const leadListInitialState ={
  leadList : [],
}
const leadListSlice = createSlice({
  name : "leadList",
  initialState : leadListInitialState,
  reducers : {
    updateLeadList : (state, action) =>{
      state.leadList = action.payload
    }
  }
})

export const {updateLeadList} = leadListSlice.actions;
export default leadListSlice.reducer;

