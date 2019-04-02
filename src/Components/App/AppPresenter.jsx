import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Home from '../../Routes/Home';
import About from '../../Routes/About';
import Fairs from '../../Routes/Fairs';

const App = () => (
  <BrowserRouter>
    <Header />
    <DefaultRoutes />
    <Footer />
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
