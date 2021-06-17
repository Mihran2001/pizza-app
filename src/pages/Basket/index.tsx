import React from "react";
import { ArticlesContent } from "../Home/Content/allArticlesContent";
import { BasketWrapper } from "./styled";
import Header from "./Header/index";
import Content from "./Content/index";

export default function Basket() {
  return (
    <BasketWrapper>
      {" "}
      <Header />
      <Content />
    </BasketWrapper>
  );
}
