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

export default function Footer() {
  const state = useAppSelector((state) => state);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    state.map((item) => {
      setTotal(total + item.price);
    });
  }, [state]);

  return (
    <FooterWrapper>
      <TotalWrapper>
        <Total>Сумма заказа: {total}₽ </Total>
      </TotalWrapper>
      <ButtonsWrapper>
        <BackToManu>Вернутся в меню</BackToManu>
        <Submit>Оформить заказ</Submit>
      </ButtonsWrapper>
    </FooterWrapper>
  );
}
