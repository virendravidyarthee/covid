import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import Login from '../containers/Login';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
}

export default Routes;
