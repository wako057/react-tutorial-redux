import { useSelector, useDispatch } from "react-redux";
import classes from './Counter.module.css';
import { counterSliceActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const counterShown = useSelector(state => state.counter.showCounter);

  function handleIncrement() {
    dispatch(counterSliceActions.increment());
  }

  function handleIncrease() {
    dispatch(counterSliceActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  }

  function handleDecrement() {
    dispatch(counterSliceActions.decrement())
  }


  const toggleCounterHandler = () => {
    dispatch(counterSliceActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterShown && (<div className={classes.value}>{counter}</div>)}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 10</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
