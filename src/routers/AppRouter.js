import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navba } from '../components/ui/Nav'
import { Exitroutes } from "./Exitroutes";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={Exitroutes}/>
                </Switch>
            </div>
        </Router>
    )
}
