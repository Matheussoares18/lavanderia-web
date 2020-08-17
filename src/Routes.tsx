import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Switch, Route } from "react-router";

import IUserAccount from "./models/IUserAccount";
import { useSelector } from "react-redux";
import { AppState } from "./store";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";

const Routes: React.FC = () => {
  const user: IUserAccount = useSelector(
    (state: AppState) => state.user.currentUser
  );
  return (
    <BrowserRouter>
      <div className="app-container">
        <Switch>
          <Route exact path="/cadastros" component={Register} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
