export type PizzaSizeType = "small" | "middle" | "big";

export type PizzaType = {
  id: number;
  price: number;
  srcSet: string;
  name: string;
  size: PizzaSizeType;
};
