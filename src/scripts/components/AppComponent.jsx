
import 'Styles/common.scss';

import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Routes from 'Components/Routes';
import NestRoute from 'Components/common/NestRoute';

function AppComponent() {
  return (
    <Router>
      <div>
        {Routes.map((route, i) => (
          <NestRoute key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}

export default AppComponent;
