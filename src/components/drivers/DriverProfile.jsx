import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

import * as actions from '../../actions';
import DriverRanking from '../rankings/DriverRanking';
import RaceRanking from '../rankings/RaceRanking';
import ClasificacionGlobal from '../rankings/GlobalRanking';

class DriverProfile extends Component {
  componentDidMount() {
    this.props.fetchSelectedDriver(this.props.match.params.driverId);
  }

  getRacePosition = (raceName, driverId) => {
    const race = this.props.races.find((race) => race.name === raceName);
    return race.drivers.findIndex((driver) => driver.id === driverId);
  };

  render() {
    return (
      <>
        <header className='App-header'>
          <h1>{this.props.selectedDriver.name}</h1>
        </header>
        <Carousel>
          <Carousel.Item>
            <h2>Driver Ranking</h2>
            <DriverRanking selectedDriver={this.props.selectedDriver} />
          </Carousel.Item>
          {this.props.races.map((race) => (
            <Carousel.Item>
              <h2>{race.name}</h2>
              <RaceRanking
                race={race}
                driverName={this.props.selectedDriver.name}
              />
            </Carousel.Item>
          ))}
          <Carousel.Item>
            <h2>Global Ranking</h2>
            <ClasificacionGlobal isIndex={false} />
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

DriverProfile.propTypes = {
  selectedDriver: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    selectedDriver: state.ranking.selectedDriver,
    races: state.ranking.races,
  };
};

export default connect(mapStateToProps, actions)(DriverProfile);
