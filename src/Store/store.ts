import { createStore } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PizzaInitialStateType } from "types";
import sortedPizzas from "pages/Home/Content/sortPizzas";
import { actionTypes } from "./actionTypes";

const initialState: PizzaInitialStateType[] = [];

const reducer = (state = initialState, action: any) => {
  //TODO
  console.log("This is state ", state);

  switch (action.type) {
    case actionTypes.ADD_PIZZA_TO_THE_BASKET:
      if (action.value.size === actionTypes.small) {
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
      } else if (action.value.size === actionTypes.middle) {
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
      } else if (action.value.size === actionTypes.big) {
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
    case actionTypes.ADD_COUNT:
      return state.map((pizza) => {
        if (pizza.id === action.id) {
          return {
            ...pizza,
            count: ++pizza.count,
          };
        }
        return pizza;
      });

    case actionTypes.REDUCE_COUNT:
      return state.map((pizza) => {
        if (pizza.id === action.id) {
          return {
            ...pizza,
            count: --pizza.count,
          };
        }
        return pizza;
      });

    case actionTypes.REMOVE_PIZZA:
      return action.state;
    case actionTypes.PIZZAS_SORT_ALPHABET:
      return sortedPizzas(state);
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);

// export const useAppDispatch = () => useDispatch<AppDispatch>()
type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
