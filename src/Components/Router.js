import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Auth from '../Routes/Auth';
import Fairs from '../Routes/Fairs';
// import About from '../Routes/About';
import Template from '../Routes/Template';
// import GetInvolved from '../Routes/GetInvolved';

const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/" component={Fairs} />
    <Route path="/template" component={Template} />
  </Switch>
);

const PublicRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

const Router = ({ isLoggedIn }) => {
  return <BrowserRouter>{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}</BrowserRouter>;
};

export default Router;
