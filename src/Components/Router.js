import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../Routes/Home';
import About from '../Routes/About';
import Fairs from '../Routes/Fairs';
import Template from '../Routes/Template';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/fairs" component={Fairs} />
      <Route path="/test" component={Template} />

      {/* Add more routes */}

      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
