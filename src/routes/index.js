
import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from '../components/App';
import Series from '../components/Series';
import Episodes from '../components/Episodes';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Series} />
    <Route path="/:series" component={Episodes} />
  </Route>
);

export default routes;
