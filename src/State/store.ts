import { applyMiddleware, combineReducers, createStore } from "redux";

const initialState: any = []; // piti poxvi type *****

const reducer = (state: any, action: any) => {
  // piti poxvi type *****
  console.log(state);

  switch (action.type) {
    case "ADD_PIZZA":
      state.push(action.value);
      return state;
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
