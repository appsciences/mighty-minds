import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import studentsList from './studentsList';
import profile from './profile';

export default combineReducers({
  studentsList,
  profile,
  routing: routerReducer
});