import React, { useState } from "react";
import {
  PizzaArticleMainDiv,
  PizzaPicture,
  PizzaArticle,
  PizzaPictureName,
  PizzaArticleFooter,
  PizzaPriceDiv,
} from "./styled";
import { Radio, Button } from "antd";
import { pizzaSizes, pizzaWeight } from "constants/pizza";
import { PizzaSizeType, PizzaWeightType } from "types";

export type SubmittingValuesType = {
  size: PizzaSizeType;
  weight: PizzaWeightType;
};

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
  const [weight, setWeight] = useState<PizzaWeightType>("traditional");

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

        <Radio.Group
          defaultValue={weight}
          style={{ display: "flex" }}
          onChange={(e) => setWeight(e.target.value as PizzaWeightType)}
        >
          {pizzaWeight.map((item) => (
            <Radio.Button value={item.value} key={item.id}>
              {item.title}
            </Radio.Button>
          ))}
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
          onClick={() => onSubmit({ size, weight })}
        >
          Выбрать
        </Button>
      </PizzaArticleFooter>
    </PizzaArticle>
  );
}
