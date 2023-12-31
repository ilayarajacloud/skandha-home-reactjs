import { createSlice } from "@reduxjs/toolkit";

const customerListInitialState = {
  customerList : []
}

const customerListSlice = createSlice({
  name : "listCustomers",
  initialState: customerListInitialState,
  reducers : {
    updateCustomerList : (state, action)=>{
      state.customerList = action.payload
    }
  }
})

export const {updateCustomerList} =customerListSlice.actions;
export default customerListSlice.reducer;