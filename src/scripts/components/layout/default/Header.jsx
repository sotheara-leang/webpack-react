import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () =>  (
  <Navbar fluid collapseOnSelect staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Demo App</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/user"><NavItem>User</NavItem></LinkContainer>
      <LinkContainer to="/role"><NavItem>Role</NavItem></LinkContainer>
    </Nav>
    <Nav pullRight>

    </Nav>
  </Navbar>
);

export default Header;
