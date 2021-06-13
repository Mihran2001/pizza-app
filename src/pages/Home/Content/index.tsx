import React from "react";
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
  PizzaArticleMainDiv,
  PizzaPicture,
  PizzaArticle,
  PizzaPictureName,
  PizzaArticleFooter,
  PizzaPriceDiv,
} from "./styled";
import { CaretUpOutlined, PlusCircleOutlined } from "@ant-design/icons";

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
              <p> алфавиту </p>
            </SortLabel>
          </Sort>
        </TopContent>
        <h2 style={{ margin: "35px" }}>Все пиццы</h2>
        <PizzasSection>
          <PizzaArticle>
            <PizzaArticleMainDiv>
              <PizzaPicture>
                <source
                  srcSet="https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_138x138.jpeg 138w,https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_146x146.jpeg 146w,https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_183x183.jpeg 183w,https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_233x233.jpeg 233w,https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_292x292.jpeg 292w,https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_366x366.jpeg 366w,https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_584x584.jpeg 584w,https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_760x760.jpeg 760w,https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_1875x1875.jpeg 1875w"
                  sizes="(max-width=1439px) 133px, (max-width=1279px) 118px, 192px"
                />
                <img
                  alt="Колбаски Барбекю"
                  title="Колбаски Барбекю"
                  style={{ width: "95%px", marginLeft: "5%" }}
                  src="https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_138x138.jpeg"
                ></img>
              </PizzaPicture>
              <PizzaPictureName>Колбаски Барбекю</PizzaPictureName>
              <p style={{ marginLeft: "10px" }}>
                {" "}
                Острая чоризо, соус барбекю, томаты, красный лук, моцарелла,
                томатный соус{" "}
              </p>
            </PizzaArticleMainDiv>
            <PizzaArticleFooter>
              <PizzaPriceDiv>
                <p>
                  {" "}
                  От <span> 395 ₽ </span>{" "}
                </p>
              </PizzaPriceDiv>
              <PlusCircleOutlined
                style={{
                  marginTop: "10px",
                  fontSize: "25px",
                }}
              />
            </PizzaArticleFooter>
          </PizzaArticle>
        </PizzasSection>
      </Container>
    </MainContent>
  );
}
