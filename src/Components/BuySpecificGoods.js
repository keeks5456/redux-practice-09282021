import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../actions";

const BuySpecificGoods = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Goods Left - {props.goods} </h2>
      <button onClick={props.buyGoods}>Buy Goods</button>
    </div>
  );
};
//will take two params, ownProps & state
const mapStateToProps = (state, ownProps) => {
  console.log(state.cakeIceCream.numOfIceCream);
  console.log(ownProps.cakeIceCream);
  const goodsState = ownProps.cakeIceCream
    ? state.cakeIceCream.numOfCake
    : state.cakeIceCream.numOfIceCream;

  return {
    goods: goodsState,
  };
};
//will take two params, dispatch & ownProps
const mapDispatchToProps = (dispatch, ownProps) => {
  const disptachFunction = ownProps.cakeIceCream
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

    return {
      buyGoods: disptachFunction
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BuySpecificGoods);
