import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import ClasificacionGlobal from './rankings/GlobalRanking';

class Index extends Component {
  render() {
    return (
      <Row>
        <Col md={{ span: 8, offset: 4 }}>
          <header className='App-header'>
            <h1>Global Ranking</h1>
          </header>
        </Col>
        <Col md={{ span: 10, offset: 1 }}>
          <ClasificacionGlobal isIndex={true} />
        </Col>
      </Row>
    );
  }
}

export default Index;
