// write your createStore function here
// Write a function called createStore that 
// takes in a reducer function as an argument.
// The createStore function should return an 
// object with two methods - getState, dispatch.
// get state should return the current state
// dispatch takes in an action, updates the state 
// using the reducer

function createStore(candyReducer) {
  let state;

  function dispatch(action) {
    state = candyReducer(state, action)
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState
  }
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

// define a variable named store
// and assign it to whatever is returned
// by createStore function when it is passed the
// candyReducer function

let store = createStore(candyReducer)
store.dispatch({ type: '@@INIT' })


function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// Use your createStore function and the functions provided 
// here to create a store.
// Once the store is created, call an initial dispatch.