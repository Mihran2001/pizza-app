import React, { useState } from "react";
import {
  PizzaArticleMainDiv,
  PizzaPicture,
  PizzaArticle,
  PizzaPictureName,
  PizzaArticleFooter,
  PizzaPriceDiv,
} from "./styled";
import { Radio, Button, Form } from "antd";
import { pizzaSizes } from "constants/pizza";
import { ArticlesContent } from "./allArticlesContent";
import { PizzaSizeType } from "types";

export type SubmittingValuesType = { size: PizzaSizeType };

type PropsType = {
  price: number;
  srcSet: string;
  name: string;
  onSubmit: (values: SubmittingValuesType) => void;
  id: number;
};

export default function PizzasArticle({
  name,
  price,
  srcSet,
  onSubmit,
}: PropsType) {
  const [size, setSize] = useState<PizzaSizeType>("middle");

  return (
    <PizzaArticle>
      <PizzaArticleMainDiv>
        <PizzaPicture>
          <source
            srcSet={srcSet}
            sizes="(max-width=1439px) 133px, (max-width=1279px) 118px, 192px"
          />
          <img style={{ width: "95%", marginLeft: "5%" }}></img>
        </PizzaPicture>

        <PizzaPictureName> {name}</PizzaPictureName>

        <Radio.Group
          defaultValue={size}
          style={{ marginTop: 16, display: "flex" }}
          onChange={(e) => setSize(e.target.value as PizzaSizeType)}
        >
          {pizzaSizes.map((pizzaSize) => (
            <Radio.Button value={pizzaSize.value} key={pizzaSize.id}>
              {pizzaSize.title}
            </Radio.Button>
          ))}
        </Radio.Group>

        <Radio.Group defaultValue="b" style={{ display: "flex" }}>
          <Radio.Button value="traditional">Традиционное</Radio.Button>

          <Radio.Button value="thin">Тонкое</Radio.Button>
        </Radio.Group>
      </PizzaArticleMainDiv>
      <PizzaArticleFooter>
        <PizzaPriceDiv>
          <p>
            {" "}
            От <span> {price} </span>{" "}
          </p>
        </PizzaPriceDiv>
        <Button
          style={{
            marginTop: "5px",
            minWidth: "120px",
            height: "40px",
            backgroundColor: "rgb(255, 240, 230)",
            color: "rgb(209, 87, 0)",
            borderRadius: "30px",
          }}
          htmlType="submit"
          onClick={() => onSubmit({ size })}
        >
          Выбрать
        </Button>
      </PizzaArticleFooter>
    </PizzaArticle>
  );
}
