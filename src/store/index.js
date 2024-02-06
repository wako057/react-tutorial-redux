import {createStore} from 'redux';

const initialState = {
  counter: 0,
  showCounter: true
};

const counterReducer = (state = initialState, action) => {
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

  if (action.type === 'toggle') {
    stateCopy.showCounter = !stateCopy.showCounter;
  }

  console.log(stateCopy);
  return stateCopy;
};

const store = createStore(counterReducer);

export default store;