import {createSlice} from "@reduxjs/toolkit";

const facingInitialState ={
  plotFacingList:[]
}


const createPlotFacingSlice = createSlice({
  name:"facing",
  initialState : facingInitialState,
  reducers : {
    updatePlotFacing:(state, action)=>{
      state.plotFacingList=action.payload
    }
  }
})

export const {updatePlotFacing} =createPlotFacingSlice.actions;
export default createPlotFacingSlice.reducer