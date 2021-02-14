import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as actions from '../../actions';
import DriverCard from '../drivers/DriverCard';

class ClasificacionGlobal extends Component {
  componentDidMount() {
    this.props.fetchResults();
  }

  popover = function (driver) {
    return (
      <Popover>
        <DriverCard driver={driver} />
      </Popover>
    );
  };

  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {this.props.drivers &&
            this.props.drivers.map((driver, index) => (
              <tr
                key={index}
                className={
                  !this.props.isIndex && driver.name === this.props.driverName
                    ? 'selectedDriver'
                    : ''
                }>
                <td>{index + 1}</td>

                {this.props.isIndex ? (
                  <td>
                    <OverlayTrigger
                      className='driverLink'
                      placement='right'
                      overlay={this.popover(driver)}>
                      <Link to={'/kart-ranking/driver/' + driver._id}>
                        {driver.name}
                      </Link>
                    </OverlayTrigger>
                  </td>
                ) : (
                  <td>{driver.name}</td>
                )}

                <td>{driver.team}</td>
                <td>{driver.globalScore}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}

ClasificacionGlobal.propTypes = {
  drivers: PropTypes.array,
  isIndex: PropTypes.bool,
  driverName: PropTypes.string,
};

const mapStateToProps = (state) => {
  return { drivers: state.ranking.drivers, races: state.ranking.drivers };
};

export default connect(mapStateToProps, actions)(ClasificacionGlobal);
