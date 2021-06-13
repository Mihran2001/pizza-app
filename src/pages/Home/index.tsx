import React from "react";
import { MainDiv } from "./styled";
import Header from "./Header/index";
import Content from "./Content/index";

export default function Home() {
  return (
    <MainDiv>
      <Header />
      <Content />
    </MainDiv>
  );
}
