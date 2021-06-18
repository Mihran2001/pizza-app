export type PizzaSizeType = "small" | "middle" | "big";
export type PizzaWeightType = "traditional" | "thin";

export type PizzaType = {
  id: number;
  price: number;
  srcSet: string;
  name: string;
  size: PizzaSizeType;
  weight: string;
  count: number;
};
