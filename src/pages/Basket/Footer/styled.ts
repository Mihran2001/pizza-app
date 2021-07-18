import styled from "styled-components";
import { Button } from "antd";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 128px !important;
  width: 714px;
  margin: 0px auto;
  flex: 1 1 0%;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 714px;
  margin: 0px auto;
  flex: 1 1 0%;
`;

export const Total = styled.div`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 714px;
  margin: 0px auto;
  flex: 1 1 0%;
`;

export const Submit = styled(Button)`
  background-color: aliceblue;
  height: 48px;
  padding: 12px 54px 12px 48px;
  font-size: 16px;
  line-height: 24px;
  background-color: rgb(255, 105, 0);
  color: rgb(255, 255, 255);
  outline: none;
  border: none;
  border-radius: 9999px;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  transition-property: background-color, color;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
`;

export const BackToManu = styled(Button)`
  background-color: aliceblue;
  height: 48px;
  padding: 12px 54px 12px 48px;
  font-size: 16px;
  line-height: 24px;
  background-color: rgb(243, 243, 247);
  color: rgb(92, 99, 112);
  outline: none;
  border: none;
  border-radius: 9999px;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  transition-property: background-color, color;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
`;
