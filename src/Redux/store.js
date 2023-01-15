import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakeSlice";
import icecreamReducer from "./iceCreamSlice";
import postsReducer from "./posts";
const store = configureStore({
  reducer: {
    cakes: cakeReducer,
    icecream: icecreamReducer,
    posts: postsReducer,
  },
});

export default store;
