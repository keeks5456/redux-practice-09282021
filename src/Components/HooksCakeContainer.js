import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../actions";

const HooksCakeContainer = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cakeIceCream.numOfCake);
  console.log(numOfCakes);
  return (
    <div>
      <h2>Number Of Cakes Left - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake(numOfCakes))}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
