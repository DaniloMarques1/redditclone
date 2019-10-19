import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                {/* <Route path='/' component={Home}></Route> */}
            </Switch>
        </BrowserRouter>
    );
}