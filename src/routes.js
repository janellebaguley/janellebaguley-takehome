import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import MyOrders from './components/Menu/MyOrders/MyOrders';
// import Settings from './components/Menu/Settings/Settings';
// import Landing from './components/Dashboard/Landing';
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

export default (
    <Switch>
        {/* <Route exact path= '/' component={Landing}/> */}
        <Route path= '/login' component={Login}/>
        <Route path= '/register' component={Register}/>
        {/* <Route path= '/myorders' component={MyOrders}/> */}
        {/* <Route path= '/settings' component={Settings}/> */}
    </Switch>
)