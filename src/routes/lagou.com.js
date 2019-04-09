import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Lagou from './Lagou';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Lagou} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
