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
          <Col xs={3} md={{ offset: 1, span: 1 }}>
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

          <Col xs={8} md={{ offset: 3, span: 2 }}>
            <Row as={Col} className='profileInfo'>
              <p>Global Score: {this.props.selectedDriver.globalScore}</p>
            </Row>
            <Row as={Col} className='profileInfo'>
              <p>Age: {this.props.selectedDriver.age}</p>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Carousel>
              <Carousel.Item>
                <Col md={{ span: 8, offset: 4 }}>
                  <h2>Personal Ranking</h2>
                </Col>
                <Col md={{ span: 10, offset: 1 }}>
                  <DriverRanking selectedDriver={this.props.selectedDriver} />
                </Col>
              </Carousel.Item>
              {this.props.races.map((race, index) => (
                <Carousel.Item key={index}>
                  <Col md={{ span: 7, offset: 5 }}>
                    <h2>{race.name}</h2>
                  </Col>
                  <Col md={{ span: 10, offset: 1 }}>
                    <RaceRanking
                      race={race}
                      driverName={this.props.selectedDriver.name}
                    />
                  </Col>
                </Carousel.Item>
              ))}
              <Carousel.Item>
                <Col md={{ span: 8, offset: 4 }}>
                  <h2>Global Ranking</h2>
                </Col>
                <Col md={{ span: 10, offset: 1 }}>
                  <ClasificacionGlobal
                    isIndex={false}
                    driverName={this.props.selectedDriver.name}
                  />
                </Col>
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
