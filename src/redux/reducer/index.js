// reducers.js
import { combineReducers } from 'redux';
import handleCart from './handleCart';

const rootReducer = combineReducers({
  cart: handleCart,
  // Add other reducers here if needed
});

export default rootReducer;
