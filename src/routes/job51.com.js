import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Job51 from './Job51';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Job51} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
