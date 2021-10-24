import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Navba } from '../components/ui/Nav'
import { Menu } from '../components/menuScreen/Menu'
import { About } from '../components/screen/About'
import { Contact } from '../components/screen/Contact'
import { LogginScreen } from '../components/screen/LogginScreen'
import { WelcomScreen } from '../components/screen/WelcomScreen'

export const Exitroutes = () => {
    return (
        <>
          <Navba/>
          <div>
              <Switch>
              <Route exact path="/menu" component={Menu}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/welcome" component={WelcomScreen}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/login" component={LogginScreen}></Route>
                    <Route path="/" component={WelcomScreen}></Route>
                    <Redirect to="/"/>
              </Switch>
          </div>  
        </>
    )
}
