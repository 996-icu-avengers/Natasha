import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Liepin from './Liepin';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Liepin} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
