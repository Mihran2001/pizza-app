import React, { useEffect, useState } from "react";
import {
  Submit,
  FooterWrapper,
  BackToManu,
  TotalWrapper,
  ButtonsWrapper,
  Total,
} from "./styled";
import { useAppSelector } from "Store/store";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const state = useAppSelector((state) => state);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  console.log(state, "state main");

  useEffect(() => {
    let total = 0;
    state.forEach((item) => {
      total = total + item.price * item.count;
    });
    setTotal(total);
  }, [state]);

  return (
    <FooterWrapper>
      <TotalWrapper>
        <Total>Сумма заказа: {total}₽ </Total>
      </TotalWrapper>
      <ButtonsWrapper>
        <BackToManu onClick={() => history.push("/")}>
          Вернутся в меню
        </BackToManu>
        <Submit>Оформить заказ</Submit>
      </ButtonsWrapper>
    </FooterWrapper>
  );
}
