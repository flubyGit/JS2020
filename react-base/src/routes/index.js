import React from 'react';

import { Switch } from 'react-router-dom';
import PrivateRoute from './auth';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Login} isClosed />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
