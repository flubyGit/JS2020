import React from 'react';

import { Switch } from 'react-router-dom';
import PrivateRoute from './auth';

import Pupil from '../pages/Pupil';
import Pupils from '../pages/Pupils';
import Photos from '../pages/Photos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/pupil/:id" component={Pupil} isClosed />
      <PrivateRoute exact path="/pupil" component={Pupil} isClosed />
      <PrivateRoute exact path="/photo" component={Photos} isClosed />

      <PrivateRoute exact path="/" component={Pupils} isClosed={false} />
      <PrivateRoute
        exact
        path="/register"
        component={Register}
        isClosed={false}
      />
      <PrivateRoute exact path="/login" component={Login} isClosed={false} />

      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
