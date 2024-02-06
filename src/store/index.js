import {createStore} from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  const stateCopy = { ...state };
  console.log('On est dans le reducer, action: ', action , 'state: ', state, 'stateCopy', stateCopy);

  if (action.type === 'increment') {
    stateCopy.counter++;
  }

  if (action.type === 'increase') {
    stateCopy.counter = stateCopy.counter + action.amount;
  }

  if (action.type === 'decrement') {
    stateCopy.counter--;
  }

  console.log(stateCopy);
  return stateCopy;
};

const store = createStore(counterReducer);

export default store;