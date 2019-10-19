import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                {/* <Route path='/' component={Home}></Route> */}
            </Switch>
        </BrowserRouter>
    );
}