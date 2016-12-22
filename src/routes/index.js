
import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from '../components/App';
import Home from '../components/Home';
import Tools from '../components/Tools';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="tools" component={Tools} />
  </Route>
);

export default routes;
