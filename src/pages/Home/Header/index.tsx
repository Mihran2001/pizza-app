import React from "react";
import { useHistory } from "react-router-dom";
import {
  HeaderDiv,
  HeaderContainer,
  ReactPizzaDiv,
  BasketButton,
} from "./styled";
import { useAppSelector } from "Store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const length = useAppSelector((state) => state.length);

  // console.log(state.length);

  const dispatch = useDispatch();

  const history = useHistory();
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

        <BasketButton onClick={() => history.push("/basket")}>
          <img
            src="/img/shopping-cart.png"
            style={{
              height: "30px",
              width: "35px",
              marginRight: "15px",
            }}
          />
          <span style={{ color: "white" }}> {length} </span>
        </BasketButton>
      </HeaderContainer>
    </HeaderDiv>
  );
}
