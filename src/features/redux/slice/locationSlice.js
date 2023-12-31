import { createSlice } from "@reduxjs/toolkit";

const locationInitialState ={
  projectLocation : []
}

const locationSlice = createSlice({
  name:"location",
  initialState : locationInitialState,
  reducers : {
    updateProjectLocation :(state, action)=>{
      state.projectLocation=action.payload
    }
  }
})

export const {updateProjectLocation}=locationSlice.actions;
export default locationSlice.reducer;