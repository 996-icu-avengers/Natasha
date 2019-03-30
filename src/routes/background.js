import React from 'react';
import { Router } from 'dva/router';

function RouterConfig({ history }) {
  console.log('start in background')
  return (
    <Router history={history}>
    </Router>
  );
}

export default RouterConfig;
