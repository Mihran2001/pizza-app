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
import "antd/dist/antd.css";

type PropsType = {
  price: string;
  srcSet: string;
  name: string;
  onSubmit: any; //es petqa uxxvi **************
};

type PizzaType = {
  size: string;
  thinOrTraditional: string;
};

export default function PizzasArticle({
  name,
  price,
  srcSet,
  onSubmit,
}: PropsType) {
  const [state, setState] = useState<PizzaType>({
    size: "middle",
    thinOrTraditional: "traditional",
  });
  return (
    // <Form.Item name={name} >
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
          <Radio.Button
            value="small"
            onClick={() => setState({ ...state, size: "small" })}
          >
            Маленькая
          </Radio.Button>
          <Radio.Button
            value="middle"
            onClick={() => setState({ ...state, size: "middle" })}
          >
            Средняя
          </Radio.Button>
          <Radio.Button
            value="big"
            onClick={() => setState({ ...state, size: "big" })}
          >
            Большая
          </Radio.Button>
        </Radio.Group>

        <Radio.Group defaultValue="b" style={{ display: "flex" }}>
          <Radio.Button
            value="traditional"
            onClick={() =>
              setState({ ...state, thinOrTraditional: "traditional" })
            }
          >
            Традиционное
          </Radio.Button>
          <Radio.Button
            value="thin"
            onClick={() => setState({ ...state, thinOrTraditional: "thin" })}
          >
            Тонкое
          </Radio.Button>
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
          onClick={() => onSubmit(state)}
        >
          Выбрать
        </Button>
      </PizzaArticleFooter>
    </PizzaArticle>
    // </Form.Item>
  );
}
