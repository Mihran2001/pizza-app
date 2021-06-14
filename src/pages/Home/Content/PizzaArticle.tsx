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
import "antd/dist/antd.css";

type PropsType = {
  price: string;
  srcSet: string;
  name: string;
};

type PizzaType = {
  size: string;
  thinOrTraditional: string;
};

export default function PizzasArticle({ name, price, srcSet }: PropsType) {
  const [state, setState] = useState<PizzaType>({
    size: "middle",
    thinOrTraditional: "traditional",
  });
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
          defaultValue="a"
          style={{ marginTop: 16, display: "flex" }}
        >
          <Radio.Button value="small">Маленькая</Radio.Button>
          <Radio.Button value="middle">Средняя</Radio.Button>
          <Radio.Button value="big">Большая</Radio.Button>
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
        >
          Выбрать
        </Button>
      </PizzaArticleFooter>
    </PizzaArticle>
  );
}
