
import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from '../components/App';
import Series from '../components/Series';
import Seasons from '../components/Seasons';
import Episodes from '../components/Episodes';
import Episode from '../components/Episode';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Series} />
    <Route path="/:show" component={Seasons} />
    <Route path="/:show/:season" component={Episodes} />
    <Route path="/:show/:season/:episode" component={Episode} />
  </Route>
);

export default routes;
