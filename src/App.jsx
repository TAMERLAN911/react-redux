import { type } from "@testing-library/user-event/dist/type";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const countPlus = (counter) => {
    dispatch({ type: "plus" });
  };

  const countMinus = (counter) => {
    dispatch({ type: "minus" });
  };

  const countReset = (counter) => {
    dispatch({ type: "reset" });
  };

  console.log(counter);
  return (
    <div className={"app"}>
      <div className="counter">{counter}</div>
      <div className="container" style={{ display: "flex" }}>
        <button onClick={countPlus}>+</button>
        <button onClick={countMinus}>-</button>
        <button onClick={countReset}>reset</button>
      </div>
    </div>
  );
}

export default App;
