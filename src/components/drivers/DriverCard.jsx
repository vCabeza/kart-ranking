import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Image } from 'react-bootstrap';

class DriverCard extends Component {
  render() {
    return (
      <Card>
        <Row className='cardBody'>
          <Col xs={3}>
            <Image src={this.props.driver.picture} />
          </Col>
          <Col xs={9}>
            <Row as={Col}>
              <h5>{this.props.driver.name}</h5>
            </Row>
            <Row as={Col}>
              <h6>Team {this.props.driver.team}</h6>
            </Row>
          </Col>

          <Col xs={12}>
            <Row as={Col} className='cardInfo'>
              <p>Global Score: {this.props.driver.globalScore}</p>
            </Row>
            <Row as={Col} className='cardInfo'>
              <p>Age: {this.props.driver.age}</p>
            </Row>
          </Col>
        </Row>
      </Card>
    );
  }
}

DriverCard.propTypes = {
  driver: PropTypes.object,
};

export default DriverCard;
