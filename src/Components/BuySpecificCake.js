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
      <h3>How Many Cookies Would You Like To Order?</h3>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      {number === 1 ? (
        <p> Your Order of 1 Cookie Has Been Made! Enjoy :)</p>
      ) : (
        <>
          <button onClick={() => props.makeCookies(number)}>
            {" "}
            Buy {number} Cakes
          </button>

          <p>Your Order of {number} Cookies Have Been Made! Enjoy :) </p>
        </>
      )}
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
    makeCookies: (number) => dispatch(makeCookies(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuySpecificCake);


/*if we only want to sipatch actions but not subscribe  to state changes to staore, you can pass null as first args to connect

ex:  export default connect(null, mapDispatchToProps)(BuySpecificCake);

*/