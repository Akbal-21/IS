import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Menu } from "../components/menuScreen/Menu";
import { About } from "../components/screen/About";
import { WelcomScreen } from "../components/screen/WelcomScreen";
import { Contactus } from "../components/screen/Contact";
import { Nav1 } from "../components/ui/Nav1";
import { Busqueda } from "../components/menuScreen/Busqueda";


export const DashboardRoutes = () => {
    return (
        <>
          <Nav1 />
          <div className="container mt-2">
            <Switch>
              <Route exact path="/menu" component={Menu}/>
              <Route exact path="/contact" component={Contactus}/>
              <Route exact path="/welcome" component={WelcomScreen}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/search" component={Busqueda}/>
              <Redirect to="/welcome" />
            </Switch>
          </div>
        </>
      );
}
