import React from "react";
import {
  HeaderDiv,
  HeaderContainer,
  ReactPizzaDiv,
  SumAndBasketButton,
  ButtonDelimiter,
} from "./styled";

export default function Header() {
  return (
    <HeaderDiv>
      <HeaderContainer>
        <ReactPizzaDiv>
          <img
            src="/img/pizza-img.png"
            style={{ height: "38px", width: "38px", margin: "10px" }}
          />
          <div>
            <h3> REACT PIZZA </h3>
            <p> самая вкусная пицца во вселенной</p>
          </div>
        </ReactPizzaDiv>
        <SumAndBasketButton>
          <span style={{ color: "white" }}>0 ₽</span>
          <ButtonDelimiter />
          <img
            src="/img/shopping-cart.png"
            style={{
              height: "25px",
              width: "25px",
              marginRight: "5px",
            }}
          />
          <span style={{ color: "white" }}> 0 </span>
        </SumAndBasketButton>
      </HeaderContainer>
    </HeaderDiv>
  );
}
