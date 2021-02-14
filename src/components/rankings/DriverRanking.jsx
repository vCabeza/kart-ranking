import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import * as actions from '../../actions';

class DriverRanking extends Component {
  getRacePosition = (raceName) => {
    const race = this.props.races.find((race) => race.name === raceName);
    return race.driversScore.findIndex(
      (driver) => driver.id === this.props.selectedDriver._id
    );
  };

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Race</th>
            <th>Time</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {this.props.selectedDriver &&
            this.props.selectedDriver.races &&
            this.props.selectedDriver.races.map((race, index) => (
              <tr key={index}>
                <td>{race.name}</td>
                <td>{race.time}</td>
                <td>{this.getRacePosition(race.name) + 1}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}

DriverRanking.propTypes = {
  driver: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { races: state.ranking.races };
};

export default connect(mapStateToProps, actions)(DriverRanking);
