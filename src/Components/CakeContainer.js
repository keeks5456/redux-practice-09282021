import React from "react";
//actions
import { buyCake } from "../actions";
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
    </CakeContainerStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cakeIceCream.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
