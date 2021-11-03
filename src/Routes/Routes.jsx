import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Index from '../pages/Public/index';
import Roles from '../pages/Admin/Roles';
import Dashboard from '../pages/Admin/Dashboard';
import Privatelayout from '../layout/Privatelayout';
import Publiclayout from '../layout/Publiclayout';
import Ventas from '../pages/Admin/Ventas';
import Features from '../pages/Public/Features';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={['/dash', '/roles', '/ventas']}>
                    <Privatelayout>
                        <Switch>
                            <Route path='/dash'>
                                <Dashboard />
                            </Route>
                            <Route path='/roles'>
                                <Roles />                          
                            </Route>
                            <Route path='/ventas'>
                                <Ventas />
                            </Route>
                        </Switch>
                    </Privatelayout>
                </Route>
                <Route path={['/feactures', '/']}>
                    <Publiclayout>
                        <Switch>
                            <Route path='/feactures'>
                                <Features/>
                            </Route>
                            <Route path='/index'>
                                <Index/>
                            </Route>
                        </Switch>
                    </Publiclayout>
                </Route>
            </Switch>

        </Router>
    )
}

export default Routes
