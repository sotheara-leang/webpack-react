import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import HomeComponent from 'Components/home/HomeComponent.jsx';
import UserListComponent from 'Components/user/UserListComponent.jsx';

const Header = () =>  (
  <Navbar fluid collapseOnSelect staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/user">Demo App</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#/user">User</NavItem>
      <NavItem eventKey={2} href="#/role">Role</NavItem>
    </Nav>
    <Nav pullRight>

    </Nav>
  </Navbar>
);

export default Header;
