import styled from "styled-components";

export const HeaderDiv = styled.div`
  height: 150px;
  width: 100%;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const ReactPizzaDiv = styled.div`
  display: flex;
`;

export const SumAndBasketButton = styled.button`
  display: flex;
  align-items: center;
  line-height: 23px;
  padding: 12px 25px;
  border-radius: 30px;
  min-width: 100px;
  background-color: #fe5f1e;
  border: none;
`;

export const ButtonDelimiter = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;
`;
