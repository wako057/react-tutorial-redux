import {createStore} from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  const stateCopy = { ...state };
  console.log('On est dans le reducer, state: ', state, 'action: ', action);

  if (action === 'increment') {
    stateCopy.counter++;
  }

  if (action === 'decrement') {
    stateCopy.counter--;
  }

  return stateCopy;
};

const store = createStore(counterReducer);

export default store;