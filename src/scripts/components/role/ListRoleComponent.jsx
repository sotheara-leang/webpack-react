import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Grid, Row, Col,
  Well,
  Button,
  Table,
  PageHeader
} from 'react-bootstrap';

const ListRoleComponent = () =>  (
  <Grid>
    <Row className="show-grid">
      <Col sm={12}>
        <PageHeader>Role Management</PageHeader>
        <Well bsSize="sm">
           <LinkContainer to="/user/new"><Button bsStyle="primary">New role</Button></LinkContainer>
           <Button bsStyle="danger" className="pull-right">Delete role</Button>
        </Well>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Admin</td>
              <td>Admin User</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Super Admin</td>
              <td>Super Admin User</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Grid>
);

export default ListRoleComponent;
