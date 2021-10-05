import React, { useState } from "react";
//actions
import { buyCake, buyIceCream, makeCookies } from "../actions";
import { connect } from "react-redux";
//styling here
import { CakeContainerStyle } from "../Styled-components/cakeStyles";
//component

const BuySpecificCake = (props) => {
  const [number, setNumber] = useState(1);

  /*or deconstruct to just be numOfCakes*/
  return (
    <CakeContainerStyle>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => props.buyCake(number)}> Buy {number} Cakes</button>
      <h3>There are now {props.numOfCake} left</h3>
    </CakeContainerStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cakeIceCream.numOfCake,
    numOfIceCream: state.cakeIceCream.numOfIceCream,
    numOfCookiesMade: state.cakeIceCream.numOfCookiesMade,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
    buyIceCream: () => dispatch(buyIceCream()),
    makeCookies: () => dispatch(makeCookies()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuySpecificCake);
