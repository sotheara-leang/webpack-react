import React from 'react';
import {
  Grid, Row, Col,
  Well,
  Button,
  Table,
} from 'react-bootstrap';

const UserListComponent = () =>  (
  <Grid>
    <Row className="show-grid">
      <Col xs={12}>
        <h3 style={{marginBottom: 30}}>User Management</h3>
      </Col>
      <Col xs={12}>
        <Well bsSize="sm">
           <Button bsStyle="primary">New user</Button>
        </Well>
      </Col>
      <Col xs={12}>
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

export default UserListComponent;
