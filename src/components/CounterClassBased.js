import { connect} from "react-redux";
import classes from './Counter.module.css';
import {Component} from "react";


class Counter extends Component {

  handleIncrement() {
    this.props.increment();
  }
  handleDecrement() {
    this.props.decrement();
  }

  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.handleIncrement.bind(this)}>Increment</button>
          <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.handleDecrement.bind(this)}>Toggle Counter</button>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapsDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};

export default connect(mapStateToProps, mapsDispatchToProps)(Counter);
