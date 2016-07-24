import { STUDENTS_LIST_LOADED } from '../actions/students';

import students from './fake-data/students.json';

export function loadStudentsList() {
  return dispatch => {
    // /api/students
    dispatch({
      type: STUDENTS_LIST_LOADED,
      studentsList: students
    });
  };
}

