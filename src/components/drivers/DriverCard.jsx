import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

class DriverCard extends Component {
  render() {
    return (
      <Card>
        <Card.Img variant='top' src={this.props.driver.picture} />
        <Card.Body>
          <Card.Title>{this.props.driver.name}</Card.Title>
          <Card.Text>
            <p>Team: {this.props.driver.team}</p>
          </Card.Text>
          <Card.Text>
            <p>Age: {this.props.driver.age}</p>
          </Card.Text>
          <Card.Text>
            <p>Global Points: {this.props.driver.globalScore}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

DriverCard.propTypes = {
  driver: PropTypes.object,
};

export default DriverCard;
