import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Grid, Row, Col,
  Well,
  Button,
  Table,
  PageHeader
} from 'react-bootstrap';

const ListUserComponent = () =>  (
  <Grid>
    <Row className="show-grid">
      <Col sm={12}>
        <PageHeader>User Management</PageHeader>
        <Well bsSize="sm">
           <LinkContainer to="/user/new"><Button bsStyle="primary">New user</Button></LinkContainer>
           <Button bsStyle="danger" className="pull-right">Delete user</Button>
        </Well>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Grid>
);

export default ListUserComponent;
