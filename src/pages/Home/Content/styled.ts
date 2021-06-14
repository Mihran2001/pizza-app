import styled from "styled-components";

export const MainContent = styled.div`
  padding: 40px;
`;

export const Container = styled.div`
  width: 100%;
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Categories = styled.div`
  flex: 1 1;
  max-width: 80%;
  overflow: auto;
`;

export const CategoriesUl = styled.ul`
  display: flex;
`;

export const CategoriesLi = styled.li`
  background-color: #f9f9f9;
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  user-select: none;
`;

export const Sort = styled.div`
  margin-left: 20px;
  position: relative;
`;

export const SortLabel = styled.div`
  display: flex;
  align-items: center;
`;

export const PizzasSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
`;

export const PizzaArticle = styled.article`
  display: flex;
  flex-flow: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 60px;
  width: 232px;
  margin-right: 37.3333px;
  margin-left: 35px;
`;

export const PizzaArticleMainDiv = styled.div`
  margin: 0px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: rgb(92, 99, 112);
  font-weight: 400;
`;

export const PizzaPicture = styled.picture`
  margin: 0px;
  position: relative;
  width: 100%;
  border-radius: 12px;
  cursor: pointer;
  top: 0px;
  transition: top 150ms ease-out 0s;
`;

export const PizzaPictureName = styled.h2`
  margin: 8px 0px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  line-height: 24px;
  font-family: Dodo, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  margin-left: 10px;
`;

export const PizzaArticleFooter = styled.footer`
  margin-top: 16px;
  display: flex;
`;

export const PizzaPriceDiv = styled.div`
  flex: 1 1 auto;
  padding-right: 4px;
  font-size: 22px;
  color: rgb(0, 0, 0);
  font-family: Dodo, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  line-height: 42px;
`;
