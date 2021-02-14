import { FETCH_DRIVERS, FETCH_SELECTED_DRIVER } from '../actions/types';

const initialState = {
  races: [],
  drivers: [],
  selectedDriver: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DRIVERS:
      return {
        ...state,
        races: [...action.races.values()],
        drivers: action.drivers,
      };
    case FETCH_SELECTED_DRIVER:
      return {
        ...state,
        selectedDriver: action.selectedDriver,
      };
    default:
      return state;
  }
}
