import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = [];

export const PostsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add_product: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { add_product } = PostsSlice.actions;
export default PostsSlice.reducer;
export const Add_Product = () => {
  return async (dispatch) => {
    console.log("Async thunk");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch(add_product(response.data));
      })
      .catch((error) => console.log(error.message));
  };
};
