import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartVisibility: false,
  notifcation: null,
};

const uiSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    toggle(state) {
      state.cartVisibility = !state.cartVisibility;
    },
    showNBotification(state, action) {
      state.notifcation = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
