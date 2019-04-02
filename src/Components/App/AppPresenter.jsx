import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../../Routes/Home';
import About from '../../Routes/About';
import Fairs from '../../Routes/Fairs';

const App = () => (
  <BrowserRouter>
    <DefaultRoutes />
  </BrowserRouter>
);

const DefaultRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/fairs" component={Fairs} />

    {/* Add more routes */}

    <Redirect from="*" to="/" />
  </Switch>
);

export default App;
