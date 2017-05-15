import React from 'react';
import NestRoute from 'Components/common/NestRoute';
import Header from 'Components/layout/default/Header';
import Footer from 'Components/layout/default/Footer';

import { Link, NavLink } from 'react-router-dom';

const DefaultLayout = (props) =>  (
  <div>
    <Header />
    {props.routes.map((route, i) => (
      <NestRoute key={i} {...route} />
    ))}
    <Footer />
  </div>
);

export default DefaultLayout;
