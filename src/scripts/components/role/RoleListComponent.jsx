import React from 'react';
import {
  Grid, Row, Col,
  Well,
  Button,
  Table,
} from 'react-bootstrap';

const RoleListComponent = () =>  (
  <Grid>
    <Row className="show-grid">
      <Col xs={12}>
        <h3 style={{marginBottom: 30}}>Role Management</h3>
      </Col>
      <Col xs={12}>
        <Well bsSize="sm">
           <Button bsStyle="primary">New role</Button>
        </Well>
      </Col>
      <Col xs={12}>
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

export default RoleListComponent;
