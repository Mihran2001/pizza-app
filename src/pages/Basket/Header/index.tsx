import React from "react";
import { HeaderDiv, HeaderContainer, ReactPizzaDiv } from "./styled";

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
      </HeaderContainer>
    </HeaderDiv>
  );
}
