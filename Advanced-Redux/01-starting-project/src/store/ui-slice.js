import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartVisibility: false,
};

const uiSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    toggle(state) {
      state.cartVisibility = !state.cartVisibility;
    },
  },
});
export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
