import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    buyicecream: (state) => {
      state.value -= 1;
    },
  },
});

export const { buyicecream } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
