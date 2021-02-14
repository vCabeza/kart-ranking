import { combineReducers } from 'redux';
import rankingReducer from './rankingReducer';

export default combineReducers({ ranking: rankingReducer });
