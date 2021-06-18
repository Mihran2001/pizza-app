import React from "react";
import { Container, PizzaDescripitonWrapper, PizzaCount, Sum } from "./styled";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";

type PropsType = {
  id: number;
  srcSet: string;
  pizzaName: string;
  size: string;
  weight: string;
  price: number;
};

export default function PizzaWrapper({
  id,
  srcSet,
  pizzaName,
  size,
  weight,
  price,
}: PropsType) {
  const dispatch = useDispatch();
  return (
    <Container>
      <PizzaDescripitonWrapper>
        <img style={{ width: "64px", height: "64px" }} srcSet={srcSet} />
        <div style={{ width: "300px" }}>
          <h3 style={{ marginTop: "10px", marginLeft: "10px" }}>{pizzaName}</h3>
          <p
            style={{
              marginLeft: "10px",
              marginBottom: "5px",
              fontSize: "12px",
            }}
          >
            {size} {weight}
          </p>
        </div>
        <PizzaCount>
          <MinusCircleOutlined
            style={{ fontSize: "25px" }}
            onClick={() => dispatch({ type: "REDUCE_COUNT", id, price })}
          />

          <div>
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>1</span>
          </div>

          <PlusCircleOutlined
            style={{ fontSize: "25px" }}
            onClick={() => dispatch({ type: "ADD_COUNT", id, price })}
          />
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
