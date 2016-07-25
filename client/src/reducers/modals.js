import {
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  OPEN_SIGNUP_MODAL,
  CLOSE_SIGNUP_MODAL
} from '../actions/modals';

const initialState = {
  showLoginModal: false,
  showSignupModal: false
};

function modals(state = initialState, action) {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: true
      };

    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: false
      };

    case OPEN_SIGNUP_MODAL:
      return {
        ...state,
        showSignupModal: true
      };

    case CLOSE_SIGNUP_MODAL:
      return {
        ...state,
        showSignupModal: false
      };
  }

  return state;
}

export default modals;