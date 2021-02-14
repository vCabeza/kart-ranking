import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

class RaceRanking extends Component {
  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {this.props.race &&
            this.props.race.driversScore.map((driver, index) => (
              <tr
                key={index}
                className={
                  driver.name === this.props.driverName ? 'selectedDriver' : ''
                }>
                <td>{index + 1}</td>
                <td>{driver.name}</td>
                <td>{driver.time}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}

RaceRanking.propTypes = {
  race: PropTypes.object,
  driverName: PropTypes.string,
};

export default RaceRanking;
