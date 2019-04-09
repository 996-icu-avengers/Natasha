import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Zhipin from './Zhipin';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Zhipin} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
