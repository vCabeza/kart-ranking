import { FETCH_DRIVERS, FETCH_SELECTED_DRIVER } from './types';
import DriverScore from '../class/DriverScore';
import Race from '../class/Race';
import drivers from '../drivers.json';

export const fetchResults = () => (dispatch) => {
  let races = new Map();

  drivers.forEach((driver) => {
    driver.globalScore = 0;
    driver.races.forEach((race) => {
      addDriverScore(race, driver, races);
    });
  });

  races.forEach((race) => {
    race.driversScore.sort(function (a, b) {
      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;
      return 0;
    });
    races.set(race.name, race);
  });

  setGlobalScore(races);

  dispatch({
    type: FETCH_DRIVERS,
    races,
    drivers,
  });
};

export const fetchSelectedDriver = (id) => (dispatch) => {
  const selectedDriver = drivers.find((driver) => driver._id === id);

  dispatch({
    type: FETCH_SELECTED_DRIVER,
    selectedDriver,
  });
};

function addDriverScore(newRace, newDriver, races) {
  const race = races.get(newRace.name);
  let driverScore = new DriverScore(
    newDriver._id,
    newDriver.name,
    newRace.time
  );

  if (race === undefined) {
    races.set(newRace.name, new Race(newRace.name, [driverScore]));
  } else {
    races.set(
      race.name,
      new Race(newRace.name, race.driversScore.concat(driverScore))
    );
  }
}

function updateScores(race, points) {
  for (let i = 0; i < 10; i++) {
    const driverScore = race.driversScore[i];
    const index = drivers.findIndex((driver) => driver._id === driverScore.id);
    drivers[index].globalScore += points[i];
  }
}

function setGlobalScore(races) {
  const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
  races.forEach((race) => {
    updateScores(race, points);
  });

  drivers.sort(function (a, b) {
    if (a.globalScore > b.globalScore) return -1;
    if (a.globalScore < b.globalScore) return 1;
    return 0;
  });
}
