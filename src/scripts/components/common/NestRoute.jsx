
import React from 'react';
import { Route } from 'react-router-dom';

function NestRoute(route) {
  return (
    <div>
      <Route exact={route.exact} strict={route.strict} path={route.path} render={props => (
          <route.component {...props} routes={route.routes} />
      )}/>
    </div>
  );
}

export default NestRoute;
