import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../Routes/Home';
import About from '../Routes/About';
import Template from '../Routes/Template';
import GetInvolved from '../Routes/GetInvolved';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/get-involved" component={GetInvolved} />
      <Route path="/template" component={Template} />

      {/* Add more routes */}

      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
