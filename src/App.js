import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  addFive,
  buyCake,
  buyIceCream,
  makeCookies,
} from "./actions";
import { fetchUsers } from "./actions/asyncActions";
//components
import Login from "./Components/Login";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import BuySpecificCake from "./Components/BuySpecificCake";

function App() {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const cakeIceCream = useSelector((state) => state.cakeIceCream);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addFive())}>add 5</button>

      {counter}
      <hr />
      {/*<Login/>*/}
      {/* <button onClick={() => dispatch(buyCake())}>subtract me</button>
  {cakeIceCream.numOfCake}*/}
      <button onClick={() => dispatch(buyIceCream())}>subtract me</button>
      {cakeIceCream.numOfIceCream}
      <button onClick={() => dispatch(makeCookies())}>addMe me</button>
      {cakeIceCream.makeCookies}
      <button onClick={() => dispatch(fetchUsers())}>Users</button>
      {user}
      <hr />
      <BuySpecificCake />
    </div>
  );
}

export default App;

/*
    
    
    <CakeContainer />
    <HooksCakeContainer />
    */
