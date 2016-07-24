import { PROFILE_LOADED } from '../actions/profile';

import profile from './fake-data/profile';

export function loadProfile(studentId) {
  return dispatch => {
    // /api/students/:student

    dispatch({
      type: PROFILE_LOADED,
      profile
    });
  };
}