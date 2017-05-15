import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Home = () =>  (
  <Grid>
    <Row className="show-grid">
      <Col xs={12}>
        <h4 style={{marginBottom: 30}}>This is a sample of Webpack + React </h4>
      </Col>
    </Row>
  </Grid>
);

export default Home;
