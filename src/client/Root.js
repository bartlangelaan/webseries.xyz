
import React from 'react';
import { Router, useRouterHistory } from 'react-router';
import routes from '../routes';
import { createHashHistory } from 'history'

// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

// We need a Root component for React Hot Loading.
function Root() {
  return (
    <Router history={appHistory} routes={routes} />
  );
}

export default Root;
