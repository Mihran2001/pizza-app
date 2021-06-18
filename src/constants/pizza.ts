import { PizzaSizeType, PizzaWeightType } from "../types";

export const pizzaSizes: { id: number; value: PizzaSizeType; title: string }[] =
  [
    {
      id: 1,
      value: "small",
      title: "Маленькая",
    },
    {
      id: 2,
      value: "middle",
      title: "Средняя",
    },
    {
      id: 3,
      value: "big",
      title: "Большая",
    },
  ];

export const pizzaWeight: {
  id: number;
  value: PizzaWeightType;
  title: string;
}[] = [
  {
    id: 4,
    value: "thin",
    title: "Традиционная",
  },
  {
    id: 5,
    value: "traditional",
    title: "Тонкая",
  },
];
