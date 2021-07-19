import React from "react";
import { PizzaType } from "types";
import { v4 as uuidv4 } from "uuid";
import { CaretUpOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import PizzasArticle, { SubmittingValuesType } from "./PizzaArticle";
import { ArticlesContent } from "./allArticlesContent";
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
import { pizzaCategories } from "./pizzaCategories";
import { isExists } from "./isExists";
import { useAppSelector } from "Store/store";

export default function Content() {
  const dispatch = useDispatch();
  const state = useAppSelector((state) => state);

  const handleSubmit = (values: PizzaType) => {
    let id = values.id;

    if (values.size === "middle") {
      id += 100;
    } else if (values.size === "big") {
      id += 101;
    }

    if (!isExists(id, values.size, state)) {
      // console.log(`id: ${id}`, `size: ${values.size}`);
      dispatch({ type: "ADD_PIZZA_TO_THE_BASKET", value: values });
    }
  };

  return (
    <MainContent>
      <Container>
        <TopContent>
          <Categories>
            <CategoriesUl>
              {pizzaCategories.map((item) => {
                return <CategoriesLi key={uuidv4()}> {item} </CategoriesLi>;
              })}
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
          {ArticlesContent.map((item) => {
            return (
              <PizzasArticle
                id={item.id}
                key={item.id}
                smallPrice={item.smallPrice}
                // middlePrice={item.middlePrice}
                // bigPrice={item.bigPrice}
                srcSet={item.srcSet}
                name={item.name}
                onSubmit={(values: SubmittingValuesType) =>
                  handleSubmit({ ...values, ...item })
                }
              />
            );
          })}
        </PizzasSection>
      </Container>
    </MainContent>
  );
}
