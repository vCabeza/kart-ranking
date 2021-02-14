import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Carousel, Col, Row, Image } from 'react-bootstrap';

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
        <Row>
          <Col xs={3} md={1}>
            <Image
              className='profilePicture'
              src={this.props.selectedDriver.picture}
              rounded
            />
          </Col>
          <Col xs={9} md={4}>
            <Row as={Col}>
              <h1>{this.props.selectedDriver.name}</h1>
            </Row>
            <Row as={Col}>
              <h4>Team {this.props.selectedDriver.team}</h4>
            </Row>
          </Col>

          <Col xs={12} md={4}>
            <Row as={Col}>
              Global Score: {this.props.selectedDriver.globalScore}
            </Row>
            <Row as={Col}>Age: {this.props.selectedDriver.age}</Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Carousel>
              <Carousel.Item>
                <h2>Personal Ranking</h2>
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
                <ClasificacionGlobal
                  isIndex={false}
                  driverName={this.props.selectedDriver.name}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
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
