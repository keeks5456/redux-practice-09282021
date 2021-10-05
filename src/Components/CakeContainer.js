import React from "react";
//actions
import { buyCake, buyIceCream, makeCookies } from "../actions";
import { connect } from "react-redux";
//styling here
import { CakeContainerStyle } from "../Styled-components/cakeStyles";
//component

const CakeContainer = (props) => {
  /*or deconstruct to just be numOfCakes*/
  return (
    <CakeContainerStyle>
      <h2>Number Of Cakes Left - {props.numOfCake}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <h2>Number Of Cakes Left - {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Cake</button>
      <h2>Number Of Cookies Made - {props.numOfCookiesMade}</h2>
      <button onClick={props.makeCookies}>Make Cookies</button>
    </CakeContainerStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cakeIceCream.numOfCake,
    numOfIceCream: state.cakeIceCream.numOfIceCream,
    numOfCookiesMade: state.cakeIceCream.numOfCookiesMade
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIceCream: () => dispatch(buyIceCream()),
    makeCookies: () => dispatch(makeCookies())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
