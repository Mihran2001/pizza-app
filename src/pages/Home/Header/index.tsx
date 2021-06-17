import React from "react";
import {
  HeaderDiv,
  HeaderContainer,
  ReactPizzaDiv,
  SumAndBasketButton,
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
          <img
            src="/img/shopping-cart.png"
            style={{
              height: "30px",
              width: "35px",
              marginRight: "15px",
            }}
          />
          <span style={{ color: "white" }}> 0 </span>
        </SumAndBasketButton>
      </HeaderContainer>
    </HeaderDiv>
  );
}
