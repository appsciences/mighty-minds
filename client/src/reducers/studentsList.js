import { STUDENTS_LIST_LOADED} from '../actions/students';

function students(state = [], action) {
  switch (action.type) {
    case STUDENTS_LIST_LOADED:
      return action.studentsList;
  }

  return state;
}

export default students;