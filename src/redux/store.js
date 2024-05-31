// store.js
import { createStore, combineReducers } from 'redux';
import handleCart from './reducer/handleCart'; // Adjust the import path as needed

const rootReducer = combineReducers({
    cart: handleCart,
    // other reducers if any
});

const store = createStore(rootReducer);

export default store;
