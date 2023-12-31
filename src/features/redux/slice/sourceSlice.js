import { createSlice } from "@reduxjs/toolkit";

const sourceInitialState = {
  sourceList: []
}

const createSourceSlice = createSlice({
  name:"source",
  initialState:sourceInitialState,
  reducers : {
    updateSourceList : (state, action)=>{
      state.sourceList=action.payload
    }
  }
})
export const{updateSourceList}=createSourceSlice.actions;
export default createSourceSlice.reducer;
