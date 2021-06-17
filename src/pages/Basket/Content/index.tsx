import React from "react";
import { useSelector } from "react-redux";
import PizzaWrapper from "./PizzaWrapper";
import { ContentWrapper } from "./styled";
import { ArticlesContent } from "../../Home/Content/allArticlesContent";
import { useAppSelector } from "Store/store";

export default function Content() {
  const state = useAppSelector((state) => state);
  console.log(state);

  return <ContentWrapper></ContentWrapper>;
}
