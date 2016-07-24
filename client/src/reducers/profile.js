import { PROFILE_LOADED } from '../actions/profile';

const initialState = {
  loaded: false
};

function profile(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADED:
      return {
        ...state,
        ...action.profile,
        loaded: true
      };
  }

  return state;
}

export default profile;