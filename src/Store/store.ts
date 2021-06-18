import { createStore } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PizzaType } from "types";

const initialState: PizzaType[] = [];

const reducer = (state = initialState, action: any) => {
  // piti poxvi type *****
  console.log(state);

  switch (action.type) {
    case "ADD_PIZZA_TO_THE_BASKET":
      state.push(action.value);
      return state;
    case "ADD_COUNT":
      return state.map((pizza) => {
        if (pizza.id === action.id) {
          return {
            ...pizza,
            count: ++pizza.count,
          };
        }
        return pizza;
      });
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);

// export const useAppDispatch = () => useDispatch<AppDispatch>()
type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
