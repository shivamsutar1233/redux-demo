import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};

export const CakeSlice = createSlice({
  name: "cakes",
  initialState,
  reducers: {
    buycake: (state) => {
      state.value -= 1;
    },
  },
});

export const { buycake } = CakeSlice.actions;
export default CakeSlice.reducer;
