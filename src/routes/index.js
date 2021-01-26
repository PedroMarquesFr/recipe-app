import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Comidas from '../pages/Comidas';
import Login from '../pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Comidas } />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
