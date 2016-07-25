import {
  CLOSE_LOGIN_MODAL,
  CLOSE_SIGNUP_MODAL,
  OPEN_LOGIN_MODAL,
  OPEN_SIGNUP_MODAL
} from '../actions/modals';

export function openLoginModal() {
  return {
    type: OPEN_LOGIN_MODAL
  };
}

export function closeLoginModal() {
  return {
    type: CLOSE_LOGIN_MODAL
  };
}

export function openSignupModal() {
  return {
    type: OPEN_SIGNUP_MODAL
  };
}

export function closeSignupModal() {
  return {
    type: CLOSE_SIGNUP_MODAL
  };
}
