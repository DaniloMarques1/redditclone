import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import PrivateRoute from './privateRoutes/PrivateRoute';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <PrivateRoute path='/' component={Home}></PrivateRoute>
                {/* <Route path='/' component={Home}></Route> */}
            </Switch>
        </BrowserRouter>
    );
}