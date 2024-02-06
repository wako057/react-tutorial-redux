import { useSelector, useDispatch } from "react-redux";
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const counterShown = useSelector(state => state.showCounter);

  function handleIncrement() {
    dispatch({type: 'increment'})
  }

  function handleIncrease() {
    dispatch({ type: 'increase', amount: 10 });
  }

  function handleDecrement() {
    dispatch({type: 'decrement'})
  }


  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
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
