import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/index";

function NotFoundPage() {
  return <h3>Not correct url</h3>;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path="/basket" exact>
        <Basket />
      </Route> */}
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
