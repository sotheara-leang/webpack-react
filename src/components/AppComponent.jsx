
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Template from 'Components/template/Template.jsx';
import Header from 'Components/template/default/Header.jsx';
import Body from 'Components/template/default/Body.jsx';
import Footer from 'Components/template/default/Footer.jsx';

import HomeComponent from 'Components/home/HomeComponent.jsx';
import UserListComponent from 'Components/user/UserListComponent.jsx';

import 'Styles/common.scss';

function AppComponent() {
  return (
    <Router>
      <div>
        <Template
          header={<Header />}
          body={<Body />}
          footer={<Footer />} />

        <Switch>
          <Route exact path="/" component={HomeComponent}/>
          <Route path="/user" component={UserListComponent}/>
        </Switch>
      </div>
    </Router>
  );
}

export default AppComponent;
