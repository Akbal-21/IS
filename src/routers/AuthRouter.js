import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Menu } from "../components/menuScreen/Menu";
import { About } from "../components/screen/About";
import { LogginScreen } from "../components/screen/LogginScreen";
import { WelcomScreen } from "../components/screen/WelcomScreen";
import { Contactus } from "../components/screen/Contact";
import { Navba } from "../components/ui/Nav";

export const AuthRouter = () => {
  return (
    <>
      <Navba />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/auth/menu" component={Menu} />
          <Route exact path="/auth/contact" component={Contactus} />
          <Route exact path="/auth/welcome" component={WelcomScreen} />
          <Route exact path="/auth/about" component={About} />
          <Route exact path="/auth/login" component={LogginScreen} />
          <Redirect to="/auth/welcome" />
        </Switch>
      </div>
    </>
  );
};
