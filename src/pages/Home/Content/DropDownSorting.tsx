import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
// import { useAppSelector } from "Store/store";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../../Store/actionTypes";

type SortType = "алфавиту" | "цене";

export default function DropDownSorting() {
  const dispatch = useDispatch();
  //   const state = useAppSelector((state) => state);
  const [type, setType] = useState("алфавиту");

  const onClick = (sortName: SortType) => {
    setType(sortName);
    dispatch({ type: actionTypes.PIZZAS_SORT_ALPHABET });
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => onClick("алфавиту")}>алфавиту</Menu.Item>
      <Menu.Item onClick={() => onClick("цене")}>цене</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <b> Сортировка по: </b> {type}
        <DownOutlined />
      </a>
    </Dropdown>
  );
}
