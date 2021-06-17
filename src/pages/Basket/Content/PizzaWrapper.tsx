import React from "react";
import { Container, PizzaDescripitonWrapper, PizzaCount, Sum } from "./styled";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

type PropsType = {
  srcSet: string;
  pizzaName: string;
  size: string;
  //   thinOrTraditional: string;
  price: number;
};

export default function PizzaWrapper({
  srcSet,
  pizzaName,
  size,
  //   thinOrTraditional,
  price,
}: PropsType) {
  return (
    <Container>
      <h1 style={{ fontSize: "36px" }}> Корзина </h1>
      <PizzaDescripitonWrapper>
        <img
          style={{ width: "64px", height: "64px" }}
          //   srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_366x366.jpeg 366w"
          srcSet={srcSet}
        />
        <div>
          <h3 style={{ marginTop: "10px", marginLeft: "10px" }}>
            {/* Колбаски Барбекю
             */}
            {pizzaName}
          </h3>
          <p
            style={{
              marginLeft: "10px",
              marginBottom: "5px",
              fontSize: "12px",
            }}
          >
            {/* Средняя 30 см, тонкое тесто
             */}
            {size}
          </p>
        </div>
        <PizzaCount>
          <PlusCircleOutlined style={{ fontSize: "25px" }} />
          <div>
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>1</span>
          </div>
          <MinusCircleOutlined style={{ fontSize: "25px" }} />
        </PizzaCount>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "200px",
          }}
        >
          <Sum>
            <span
              style={{
                fontFamily: " sans-serif",
                fontSize: "20px",
                marginLeft: "30px",
              }}
            >
              {/* 565 ₽ */}
              {price}
            </span>
          </Sum>
          <DeleteOutlined
            style={{
              fontSize: "25px",
              margin: "17px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      </PizzaDescripitonWrapper>
    </Container>
  );
}
