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
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

export default function Content() {
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
          {/* <PizzasArticle
            price="395 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_366x366.jpeg 366w"
            name="Колбаски Барбекю"
          />
          <PizzasArticle
            price="395 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/4bf37f95fcd341d780ab1ae93f64e3f4_366x366.jpeg 366w"
            name="Зенит"
          />
          <PizzasArticle
            price="495 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/78e732c620334b5e8e5d821685c1c4b5_366x366.jpeg 366w"
            name="Додо Микс"
          />
          <PizzasArticle
            price="395 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/f80272ecb2a74d12b122b176d8cbe4f5_366x366.jpeg 366w"
            name="Гавайская"
          />
          <PizzasArticle
            price="395 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/5dffe4c7d3bc49668f50c1d08d920992_366x366.jpeg 366w"
            name="Пепперони фреш"
          />
          <PizzasArticle
            price="245 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/ebf8b8670d6b4f078d9afa616d01202a_366x366.jpeg 366w"
            name="Сырная "
          />
          <PizzasArticle
            price="245 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/8a813e3b734e457c848a60fc70a100d5_366x366.jpeg 366w"
            name="Чизбургер-пицца"
          />
          <PizzasArticle
            price="395 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/d7c37f8b331747b284ef537cc2c22c76_366x366.jpeg 366w"
            name="Чиззи чеддер"
          />
          <PizzasArticle
            price="445 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/c2a25ef27bf24b6f84e034e684f32fa7_366x366.jpeg 366w"
            name="Карбонара"
          />
          <PizzasArticle
            price="545 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/522d6ea5e38d42049b214a79dad45d45_366x366.jpeg 366w"
            name="Нежный лосось"
          />
          <PizzasArticle
            price="445 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/32ab88d1819048e285a91d91b9ef4451_366x366.jpeg 366w"
            name="Песто"
          />
          <PizzasArticle
            price="395 ₽"
            srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/7a497170e99a435f8535f33c3ebaddc3_366x366.jpeg 366w"
            name="Овощи и грибы"
          /> */}

          {ArticlesContent.map((item) => {
            return (
              <PizzasArticle
                key={uuidv4()}
                price={item.price}
                srcSet={item.srcSet}
                name={item.name}
              />
            );
          })}
        </PizzasSection>
      </Container>
    </MainContent>
  );
}
