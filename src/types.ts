export type PizzaSizeType = "small" | "middle" | "big";
export type PizzaWeightType = "traditional" | "thin";

export type PizzaInitialStateType = {
  id: number;
  price: number;
  srcSet: string;
  name: string;
  size: PizzaSizeType;
  weight: string;
  count: number;
};

export type PizzaType = {
  id: number;
  smallPrice: number;
  middlePrice: number;
  bigPrice: number;
  srcSet: string;
  name: string;
  size: PizzaSizeType;
  weight: string;
  count: number;
};
