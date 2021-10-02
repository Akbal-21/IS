import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { CreateProyect } from '../components/screen/CreateProyect'
import { HomeScreen } from '../components/screen/HomeScreen'
import { Navbar } from '../components/ui/Navbar'


export const DashboardRoutes = () => {
    return (
        <div>
          <Navbar/>
          <div>
              <Switch>
                  <Route exact path="/new_Proyect" component={CreateProyect}/>
                  <Route exact path="/Home" component={HomeScreen}/>
                  <Redirect to="/Home"/>
              </Switch>
          </div>  
        </div>
    )
}
