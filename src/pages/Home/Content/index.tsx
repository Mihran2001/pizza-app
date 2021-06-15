import React from "react";
import PizzasArticle from "./PizzaArticle";
import { ArticlesContent } from "./AllArticlesContent";
import {
  MainContent,
  Container,
  TopContent,
  Categories,
  Sort,
  CategoriesUl,
  CategoriesLi,
  SortLabel,
  PizzasSection,
} from "./styled";
import { CaretUpOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

type StateType = {
  size: string;
  thinOrTraditional: string;
  id: number;
};

export default function Content() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleSubmit = (state: StateType) => {
    dispatch({ type: "ADD_PIZZA", value: state });
  };
  return (
    <MainContent>
      <Container>
        <TopContent>
          <Categories>
            <CategoriesUl>
              <CategoriesLi> Все </CategoriesLi>
              <CategoriesLi> Мясные </CategoriesLi>
              <CategoriesLi> Вегетерянские </CategoriesLi>
              <CategoriesLi> Гриль </CategoriesLi>
              <CategoriesLi> Острые </CategoriesLi>
              <CategoriesLi> Закрытые </CategoriesLi>
            </CategoriesUl>
          </Categories>
          <Sort>
            <SortLabel>
              <CaretUpOutlined />
              <b> Сортировка по: </b>
              <p style={{ marginTop: "13px" }}> алфавиту </p>
            </SortLabel>
          </Sort>
        </TopContent>
        <h2 style={{ margin: "35px" }}>Все пиццы</h2>
        <PizzasSection>
          {/* <Form
            style={{ display: "flex", flexWrap: "wrap" }}
            onFinish={(pr) => console.log(pr)}
          > */}
          {ArticlesContent.map((item) => {
            return (
              <PizzasArticle
                key={item.id}
                price={item.price}
                srcSet={item.srcSet}
                name={item.name}
                onSubmit={(state: any) =>
                  handleSubmit({ ...state, id: item.id })
                }
              />
            );
          })}
          {/* </Form> */}
        </PizzasSection>
      </Container>
    </MainContent>
  );
}
