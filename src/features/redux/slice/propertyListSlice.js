import {createSlice} from '@reduxjs/toolkit'

const propertyListInitialState ={
  propertyList : [],
}

const propertyListSlice = createSlice({
  name : "listProperty",
  initialState : propertyListInitialState,
  reducers : {
    updatePropertyList :(state, action) =>{
      state.propertyList = action.payload
    }
  }
})

export const{updatePropertyList} = propertyListSlice.actions;
export default propertyListSlice.reducer;