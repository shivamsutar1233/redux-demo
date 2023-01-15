import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buycake } from "../Redux/cakeSlice";
import { buyicecream } from "../Redux/iceCreamSlice";
import { Add_Product } from "../Redux/posts";
export const CakeContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const handlePosts = () => {
    console.log("Api Called");
    dispatch(Add_Product());
  };
  return (
    <div>
      <button onClick={() => dispatch(buycake())}>Buy Cake</button>
      <button onClick={() => dispatch(buyicecream())}>Buy Ice Cream</button>
      <button onClick={() => handlePosts()}>Get Posts</button>
      <div className="">{posts.map((post) => post.id + "\n")}</div>
    </div>
  );
};
