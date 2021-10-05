import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyIceCream, makeCookies } from "../actions";

const HooksCakeContainer = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cakeIceCream.numOfCake);
  const numOfIceCream = useSelector(state => state.cakeIceCream.numOfIceCream)
  const numOfCookiesMade = useSelector(state => state.numOfCookiesMade) 

  console.log(numOfCookiesMade);
  return (
    <div>
      <h2>Number Of Cakes Left - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake(numOfCakes))}>Buy Cake</button>
      <h2>Number Of Cakes Left - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream(numOfIceCream))}>Buy Cake</button>
      <h2>Number Of Cakes Left - {numOfCookiesMade}</h2>
      <button onClick={() => dispatch(makeCookies(numOfCookiesMade))}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
