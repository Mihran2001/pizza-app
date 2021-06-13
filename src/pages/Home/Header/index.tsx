import React from "react";
import {
  HeaderDiv,
  HeaderContainer,
  PizzaImg,
  ReactPizzaDiv,
  SumAndBasketButton,
  ButtonDelimiter,
} from "./styled";

export default function Header() {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <ReactPizzaDiv>
          <PizzaImg />
          <div>
            <h3> REACT PIZZA </h3>
            <p> самая вкусная пицца во вселенной</p>
          </div>
        </ReactPizzaDiv>
        <SumAndBasketButton>
          <span style={{ color: "white" }}>0 ₽</span>
          <ButtonDelimiter />
          <img src="img/shopping-cart.png" />
          <span style={{ color: "white" }}> 0 </span>
        </SumAndBasketButton>
      </HeaderContainer>
    </HeaderDiv>
  );
}
