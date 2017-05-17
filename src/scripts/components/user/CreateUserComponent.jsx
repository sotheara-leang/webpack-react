import React from 'react';
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  ButtonToolbar,
  Button,
  PageHeader
} from 'react-bootstrap';

export default class CreateUserComponent extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <PageHeader>New User</PageHeader>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={3}>Last name</Col>
                <Col sm={6}><FormControl type="text" placeholder="Last name" /></Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={3}>First name</Col>
                <Col sm={6}><FormControl type="text" placeholder="First name" /></Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={3}>Username</Col>
                <Col sm={6}><FormControl type="text" placeholder="Username" /></Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={3}>Password</Col>
                <Col sm={6}><FormControl type="password" placeholder="Password" /></Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={5} sm={2}>
                  <ButtonToolbar>
                    <Button bsStyle="primary">Save</Button>
                    <Button>Cancel</Button>
                 </ButtonToolbar>
                </Col>
             </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
