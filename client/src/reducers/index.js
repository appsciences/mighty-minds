import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import studentsList from './studentsList';
import profile from './profile';
import modals from './modals';

export default combineReducers({
  studentsList,
  profile,
  modals,
  routing: routerReducer
});