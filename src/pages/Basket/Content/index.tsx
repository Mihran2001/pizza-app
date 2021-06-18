import React from "react";
import { useSelector } from "react-redux";
import PizzaWrapper from "./PizzaWrapper";
import { ContentWrapper } from "./styled";
import { useAppSelector } from "Store/store";

export default function Content() {
  const state = useAppSelector((state) => state);
  console.log(state);

  return (
    <ContentWrapper>
      <h1 style={{ fontSize: "36px" }}> Корзина </h1>
      {state.map((pizza) => (
        <PizzaWrapper
          id={pizza.id}
          key={Math.random()}
          size={pizza.size}
          weight={pizza.weight}
          price={pizza.price}
          srcSet={pizza.srcSet}
          pizzaName={pizza.name}
        />
      ))}
    </ContentWrapper>
  );
}
