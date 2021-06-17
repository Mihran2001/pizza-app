import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { store } from "./Store/store";
import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    background-color: #ffdf8c;
    padding: 50px 0;
    justify-content: center
  }
  * {
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  font-family: 'Proxima Nova', Roboto, system-ui, Tahoma, sans-serif;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
