import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import PrivateRoute from './privateRoutes/PrivateRoute';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import CreatePost from './pages/CreatePost/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <PrivateRoute exact path='/' component={Home}></PrivateRoute>
                <PrivateRoute path='/create' component={CreatePost}></PrivateRoute>
                {/* <Route path='/' component={Home}></Route> */}
            </Switch>
        </BrowserRouter>
    );
}