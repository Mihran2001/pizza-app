import React from "react";
import { Container, PizzaDescripitonWrapper, PizzaCount, Sum } from "./styled";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "Store/store";

type PropsType = {
  id: number;
  srcSet: string;
  pizzaName: string;
  size: string;
  weight: string;
  price: number;
  count: number;
};

export default function PizzaWrapper({
  id,
  srcSet,
  pizzaName,
  size,
  weight,
  price,
  count,
}: PropsType) {
  // const state: {
  //   id: number;
  //   count: number;
  //   price: number;
  // }[] = [];

  const state = useAppSelector((state) => state);

  const dispatch = useDispatch();
  let total = 0;
  const calculateTotal = (id: number) => {
    // console.log(state);
    state.map((item: any) => {
      if (item.id === id) {
        total = item.count * item.price;
      }
    });
    return total;
  };

  const removePizza = (id: number) => {
    dispatch({
      type: "REMOVE_PIZZA",
      state: state.filter((item: any) => {
        //TODO
        if (item.id !== id) {
          return item;
        }
      }),
    });
  };
  return (
    <>
      {count >= 1 ? (
        <Container>
          <PizzaDescripitonWrapper>
            <img style={{ width: "64px", height: "64px" }} srcSet={srcSet} />
            <div style={{ width: "300px" }}>
              <h3 style={{ marginTop: "10px", marginLeft: "10px" }}>
                {pizzaName}
              </h3>
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
                onClick={() => dispatch({ type: "REDUCE_COUNT", id })}
              />

              <div>
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                  {count}
                </span>
              </div>

              <PlusCircleOutlined
                style={{ fontSize: "25px" }}
                onClick={() => dispatch({ type: "ADD_COUNT", id })}
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
                  {calculateTotal(id)}
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
                onClick={() => removePizza(id)}
              />
            </div>
          </PizzaDescripitonWrapper>
        </Container>
      ) : null}
    </>
  );
}
