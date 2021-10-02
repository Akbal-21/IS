import React, {useContext} from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const {user} = useContext(AuthContext);
    console.log(user)

    return (
    <Router>
        <div>
            <Switch>
                <PublicRoute
                    path="/auth"
                    component={AuthRouter}
                    isAuthenticated={user.logged}
                />
                <PrivateRoute   
                    path="/"
                    component={DashboardRoutes}
                    isAuthenticated={user.logged}
                />
            </Switch>
        </div>
    </Router>
    )
}
