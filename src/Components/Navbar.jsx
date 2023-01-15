import React from "react";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const numOfCakes = useSelector((state) => state.cakes.value);
  const numOfIceCreams = useSelector((state) => state.icecream.value);

  return (
    <div>
      {" "}
      <h2>Total Number of Cakes : {numOfCakes}</h2>
      <h2>Total Number of Ice Creams : {numOfIceCreams}</h2>
    </div>
  );
};
