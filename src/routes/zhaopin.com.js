import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Zhaopin from './Zhaopin';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Zhaopin} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
