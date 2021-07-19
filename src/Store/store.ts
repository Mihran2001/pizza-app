import { createStore } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PizzaInitialStateType } from "types";

const initialState: PizzaInitialStateType[] = [];

const reducer = (state = initialState, action: any) => {
  // The type must be changed *****
  console.log("This is state ", state);

  switch (action.type) {
    case "ADD_PIZZA_TO_THE_BASKET":
      if (action.value.size === "small") {
        state.push({
          id: action.value.id,
          price: action.value.smallPrice,
          srcSet: action.value.srcSet,
          name: action.value.name,
          size: action.value.size,
          weight: action.value.weight,
          count: action.value.count,
        });

        return state;
      } else if (action.value.size === "middle") {
        state.push({
          id: action.value.id + 100,
          price: action.value.middlePrice,
          srcSet: action.value.srcSet,
          name: action.value.name,
          size: action.value.size,
          weight: action.value.weight,
          count: action.value.count,
        });
        return state;
      } else if (action.value.size === "big") {
        state.push({
          id: action.value.id + 101,
          price: action.value.bigPrice,
          srcSet: action.value.srcSet,
          name: action.value.name,
          size: action.value.size,
          weight: action.value.weight,
          count: action.value.count,
        });
        return state;
      }
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

    case "REDUCE_COUNT":
      return state.map((pizza) => {
        if (pizza.id === action.id) {
          return {
            ...pizza,
            count: --pizza.count,
          };
        }
        return pizza;
      });

    case "REMOVE_PIZZA":
      return action.state;

    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);

// export const useAppDispatch = () => useDispatch<AppDispatch>()
type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
