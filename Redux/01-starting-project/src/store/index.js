import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";




/**
 * *this call will return an action object of this shape:
 * *{type: 'auto-generated unique identifier}
 * ! counterSlicer.actions.toggleCounter();
 */

/**
 * * Using cofigureStore instead of createStore as it is good practice
 * * for bigger applications that have more reducer functions
 */
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// /**
//  * * Reducer function which handles all action types
//  * * This is original way of working with redux where
//  * * the reducer funtion is bound to the store
//  * @param {automaticly passed down to retrive previous state} state
//  * @param { automaticly passed down to process a given action} action
//  * @returns
//  */
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// /**
//  * * Creating the store and binding the appropriate reducer function
//  * * which takes care of all action types
// ! const store = createStore(counterReducer);
//  */

export default store;
