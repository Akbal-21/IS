import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Menulog } from "../components/menuScreen/logMenu/Menulog";
import { About } from "../components/screen/About";
import { WelcomScreen } from "../components/screen/WelcomScreen";
import { Contactus } from "../components/screen/Contact";
import { Nav1 } from "../components/ui/Nav1";
import { Busquedalog } from "../components/menuScreen/logMenu/Busquedalog";
import { CarShop } from "../components/screen/CarShop";


export const DashboardRoutes = () => {
    return (
        <>
          <Nav1 />
          <div className="container mt-2">
            <Switch>
              <Route exact path="/menu" component={Menulog}/>
              <Route exact path="/contact" component={Contactus}/>
              <Route exact path="/welcome" component={WelcomScreen}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/search" component={Busquedalog}/>
              <Route exact path="/cart" component={CarShop}/>
              <Redirect to="/welcome" />
            </Switch>
          </div>
        </>
      );
}
